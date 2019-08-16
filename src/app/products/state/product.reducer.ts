import { Product } from "../product";
import { ProductActions, ProductActionTypes } from "./product.actions";

export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}
const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: ''
}

export function reducer(state = initialState, action: ProductActions): ProductState {
  switch (action.type) {
    case ProductActionTypes.AddProductSuccess:
      return {
        ...state,
        products: [...state.products, { ...action.payload }],
        currentProductId: action.payload.id
      }
    case ProductActionTypes.AddProductFail:
      return {
        ...state,
        products: [],
        error: action.payload
      }
    case ProductActionTypes.ClearCurrentProduct:
      return {
        ...state,
        currentProductId: null
      }
    case ProductActionTypes.DeleteProductFail:
      return {
        ...state,
        currentProductId: null,
        error: action.payload
      }
    case ProductActionTypes.DeleteProductSuccess:
      return {
        ...state,
        currentProductId: null,
        products: state.products.filter(r => r.id !== action.payload.id)
      }
    case ProductActionTypes.InitializeCurrentProduct:
      return {
        ...state,
        currentProductId: 0
      }
    case ProductActionTypes.LoadSuccess: {
      return {
        ...state,
        products: action.payload,
        error: ''
      }
    }
    case ProductActionTypes.SetCurrentProduct:
      return {
        ...state,
        currentProductId: action.payload.id
      }
    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload
      };
    case ProductActionTypes.LoadFail: {
      return {
        ...state,
        products: [],
        error: action.payload
      }
    }
    case ProductActionTypes.UpdateProductSuccess: {
      return {
        ...state,
        products: [...
          state.products.map(item => { return item.id === action.payload.id ? action.payload : item })
        ],
        currentProductId: action.payload.id,
        error: ''
      }
    }
    case ProductActionTypes.UpdateProductFail: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state;
  }
}

