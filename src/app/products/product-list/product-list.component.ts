import { Component, OnInit, OnDestroy } from "@angular/core";
import { Product } from "../product";
import { Store, select } from "@ngrx/store";
import * as fromProduct from '../state/product.reducer';
import * as productActions from '../state/product.actions';
import { takeWhile } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "pm-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = "Products";
  displayCode: boolean;
  products$: Observable<Product[]>;
  componentActive = true;

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  errorMessage$: Observable<string>;

  constructor(
    private store: Store<fromProduct.State>
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(fromProduct.getCurrentProduct), takeWhile(() => this.componentActive))
      .subscribe(product => this.selectedProduct = product);

    this.store.dispatch(new productActions.Load());

    this.products$ = this.store.pipe(select(fromProduct.getProducts))
    // .subscribe(products => this.products = products);
    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));

    this.store
      .pipe(select(fromProduct.getShowProductCode), takeWhile(() => this.componentActive))
      .subscribe(showProductCode => this.displayCode = showProductCode);
  }

  ngOnDestroy(): void {
    this.componentActive = false;
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
