import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // products
  products: Product[] = [];
  // pagination
  limit=10;
  offset=0;
  page=0;
  MAX_PRODUCTS_IN_BD = 50;
  // detail url params
  productId: string | null = null;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.productsService.getProductsByPage(this.limit, this.offset)
    .subscribe(data => {
      this.products = data;
    });
    // vigilar los parámetros url
    this.route.queryParamMap.subscribe(params => {
      this.productId = params.get('product');
    });
  }
  onPageUp(){
    if (this.limit * (this.page + 1) < this.MAX_PRODUCTS_IN_BD ) {
      this.page += 1;
      this.offset = this.limit * this.page;
      this.productsService.getProductsByPage(this.limit, this.offset)
        .subscribe(data => {
          this.products = data;
      });
    }
  }
  onPageDown(){
    if ((this.page - 1) >= 0 ) {
      this.page -= 1;
      this.offset = this.limit * this.page;
      this.productsService.getProductsByPage(this.limit, this.offset)
        .subscribe(data => {
          this.products = data;
      });
    }
  }
}
