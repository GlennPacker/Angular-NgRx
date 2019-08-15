import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from "../../product";
import { Store, select } from "@ngrx/store";
import * as fromProduct from '../../state/product.reducer';
import * as productActions from '../../state/product.actions';
import { Observable } from "rxjs";

@Component({
  templateUrl: './product-shell.component.html'
})

export class ProductShellComponent implements OnInit {
  displayCode$: Observable<boolean>;
  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  errorMessage$: Observable<string>;

  constructor(
    private store: Store<fromProduct.State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new productActions.Load());

    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
    this.selectedProduct$ = this.store.pipe(select(fromProduct.getCurrentProduct));
    this.displayCode$ = this.store.pipe(select(fromProduct.getShowProductCode));
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  newProduct(): void {
    this.store.dispatch(new productActions.InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new productActions.SetCurrentProduct(product));
  }
}
