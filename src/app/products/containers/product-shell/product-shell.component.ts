import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from "../../product";
import { Store, select } from "@ngrx/store";
import * as fromProduct from '../../state';
import * as productActions from '../../state/product.actions';
import { Observable } from "rxjs";

@Component({
  templateUrl: './product-shell.component.html'
})

export class ProductShellComponent implements OnInit {
  displayCode$: Observable<boolean>;
  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;
  currentProduct$: Observable<Product>;

  constructor(
    private store: Store<fromProduct.State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new productActions.Load());

    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
    this.displayCode$ = this.store.pipe(select(fromProduct.getShowProductCode));
    this.currentProduct$ = this.store.pipe(select(fromProduct.getCurrentProduct));
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  clear(): void {
    this.store.dispatch(new productActions.ClearCurrentProduct());
  }

  delete(product: Product): void {
    this.store.dispatch(new productActions.DeleteProduct(product));
  }

  newProduct(): void {
    this.store.dispatch(new productActions.InitializeCurrentProduct());
  }

  selected(product: Product): void {
    this.store.dispatch(new productActions.SetCurrentProduct(product));
  }

  add(product: Product): void {
    this.store.dispatch(new productActions.AddProduct(product))
  }

  update(product: Product): void {
    this.store.dispatch(new productActions.UpdateProduct(product))
  }
}
