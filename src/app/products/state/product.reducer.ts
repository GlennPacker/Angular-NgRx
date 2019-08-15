import { Product } from "../product";
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductActions, ProductActionTypes } from "./product.actions";

export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}

export interface State extends fromRoot.State {
  products: ProductState;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: ''
}

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  state => state.currentProductId
)

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  getCurrentProductId,
  (state, currentProductId) => {
    if (currentProductId === 0) {
      return {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0
      }
    }
    return currentProductId ? state.products.find(prod => prod.id === currentProductId) : null
  }
)

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
)

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
)

export const getError = createSelector(
  getProductFeatureState,
  state => state.error
)

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
    default:
      return state;
  }
}
