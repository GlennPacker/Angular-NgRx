import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as productActions from '../state/product.actions'
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Product } from '../product';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
    constructor(private actions: Actions,
        private productService: ProductService) { }

    @Effect()
    loadProducts = this.actions.pipe(
        ofType(productActions.ProductActionTypes.Load),
        mergeMap((action: productActions.Load) => this.productService.getProducts().pipe(
            map((products: Product[]) => new productActions.LoadSuccess(products)))),
        catchError(err => of(new productActions.LoadFail(err)))
    )

    @Effect()
    addProduct = this.actions.pipe(
        ofType(productActions.ProductActionTypes.AddProduct),
        map((action: productActions.AddProduct) => action.payload),
        mergeMap((product: Product) =>
            this.productService
                .createProduct(product)
                .pipe(
                    map(newProduct => (new productActions.AddProductSuccess(newProduct))),
                    catchError(err => of(new productActions.AddProductFail(err)))
                )
        )

    )

    @Effect()
    updateProduct = this.actions.pipe(
        ofType(productActions.ProductActionTypes.UpdateProduct),
        map(
            (action: productActions.UpdateProduct) => action.payload),
        mergeMap((product: Product) =>
            this.productService
                .updateProduct(product)
                .pipe(
                    map(updatedProduct => (new productActions.UpdateProductSuccess(updatedProduct))),
                    catchError(err => of(new productActions.UpdateProductFail(err)))
                )
        )
    )

    @Effect()
    deleteProduct = this.actions.pipe(
        ofType(productActions.ProductActionTypes.DeleteProduct),
        map((action: productActions.DeleteProduct) => action.payload),
        mergeMap((product: Product) =>
            this.productService
                .deleteProduct(product.id)
                .pipe(
                    map(deleteProduct => (new productActions.DeleteProductSuccess(product))),
                    catchError(err => of(new productActions.DeleteProductFail(err)))
                )
        )
    )
}
