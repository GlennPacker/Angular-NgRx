import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from "@angular/core";
import { Product } from "../../product";

@Component({
  selector: "pm-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush // fewer updates more performant
})
export class ProductListComponent {
  pageTitle = "Products";
  @Input() displayCode: string;
  @Input() errorMessage: string;
  @Input() products: Product[];
  @Input() selectedProduct: Product;

  @Output() checked = new EventEmitter<boolean>();
  @Output() initializeNewProduct = new EventEmitter<void>();
  @Output() selected = new EventEmitter<Product>();

  checkChanged(value: boolean): void {
    this.checked.emit(value);
  }

  newProduct(): void {
    this.initializeNewProduct.emit();
  }

  productSelected(product: Product): void {
    this.selected.emit(product)
  }
}