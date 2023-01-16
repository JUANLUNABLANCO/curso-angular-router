import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from 'src/app/services/products.service';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null = null;
  // pagination
  page=0;
  limit=10;
  offset=0;
  products: Product[] = [];
  MAX_PRODUCTS_IN_BD = 50;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id') || null;
      if(this.categoryId)
        this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
        .subscribe(data => {
          this.products = data;
        });
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
