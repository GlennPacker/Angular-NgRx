import { Action } from "@ngrx/store";
import { Product } from "../product";

export enum ProductActionTypes {
    AddProduct = '[Product] Add Product',
    AddProductSuccess = '[Product] Add Product Success',
    AddProductFail = '[Product] Add Product Fail',
    ClearCurrentProduct = '[Product] Clear Current Product',
    DeleteProduct = '[Product] Delete',
    DeleteProductSuccess = '[Product] Delete Success',
    DeleteProductFail = '[Product] Delete Fail',
    InitializeCurrentProduct = '[Product] Initialize Current Product',
    Load = '[Product] Load',
    LoadSuccess = '[Product] Load Success',
    LoadFail = '[Product] Load Fail',
    ToggleProductCode = '[Product] Toggle Product Code',
    UpdateProduct = '[Product] Update',
    UpdateProductSuccess = '[Product] Update Success',
    UpdateProductFail = '[Product] Update Fail',
    SetCurrentProductId = "[Product] Set Current Product Id",
    SetCurrentProduct = "[Product] Set Current Product"
}


export class AddProduct implements Action {
    readonly type = ProductActionTypes.AddProduct;
    constructor(public payload: Product) { }
}

export class AddProductSuccess implements Action {
    readonly type = ProductActionTypes.AddProductSuccess;
    constructor(public payload: Product) { }
}

export class AddProductFail implements Action {
    readonly type = ProductActionTypes.AddProductFail;
    constructor(public payload: string) { }
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class DeleteProduct implements Action {
    readonly type = ProductActionTypes.DeleteProduct;
    constructor(public payload: Product) { }
}

export class DeleteProductSuccess implements Action {
    readonly type = ProductActionTypes.DeleteProductSuccess;
    constructor(public payload: Product) { }
}

export class DeleteProductFail implements Action {
    readonly type = ProductActionTypes.DeleteProductFail;
    constructor(public payload: string) { }
}

export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.InitializeCurrentProduct;
}

export class Load implements Action {
    readonly type = ProductActionTypes.Load;
}

export class LoadFail implements Action {
    readonly type = ProductActionTypes.LoadFail;

    constructor(public payload: string) { }
}

export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess;

    constructor(public payload: Product[]) { }
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;

    constructor(public payload: Product) { }
}

export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;

    constructor(public payload: boolean) { }
}

export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UpdateProduct;
    constructor(public payload: Product) { }
}

export class UpdateProductFail implements Action {
    readonly type = ProductActionTypes.UpdateProductFail;
    constructor(public payload: string) { }
}

export class UpdateProductSuccess implements Action {
    readonly type = ProductActionTypes.UpdateProductSuccess;
    constructor(public payload: Product) { }
}

export type ProductActions =
    AddProduct
    | AddProductFail
    | AddProductSuccess
    | ClearCurrentProduct
    | DeleteProduct
    | DeleteProductFail
    | DeleteProductSuccess
    | InitializeCurrentProduct
    | Load
    | LoadFail
    | LoadSuccess
    | SetCurrentProduct
    | ToggleProductCode
    | UpdateProduct
    | UpdateProductFail
    | UpdateProductSuccess;