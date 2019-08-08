import { Action } from "@ngrx/store";
import { Product } from "../product";

export enum ProductActionTypes {
    ClearCurrentProduct = '[Product] Clear Current Product',
    InitializeCurrentProduct = '[Product] Initialize Current Product',
    Load = '[Product] Load',
    LoadSuccess = '[Product] Load Success',
    LoadFail = '[Product] Load Fail',
    SetCurrentProduct = '[Product] Set Current Product',
    ToggleProductCode = '[Product] Toggle Product Code',
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;
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

export type ProductActions = ClearCurrentProduct
    | InitializeCurrentProduct
    | Load
    | LoadFail
    | LoadSuccess
    | SetCurrentProduct
    | ToggleProductCode;