import { Component, Input } from '@angular/core';

import { Product, CreateProductDTO, UpdateProductDTO } from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @Input() products: Product[] = [];

  myShoppingCart: Product[] = [];
  total = 0;
  showProductDetail = false;
  productChosen: Product | null = null;

  // statusDetail
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';

  constructor(
    private productsService: ProductsService,
    private storeService: StoreService
  ) {

    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }
  onShowDetailProduct(id: string) {
    this.statusDetail = 'loading';
    console.log('id:', id);
    this.productsService.getProduct(id).subscribe(data => {
      this.toggleProductDetail();
      this.productChosen = data;
      this.statusDetail = 'success';
    }), (errorMsg: string) => {
      alert(errorMsg);
      this.statusDetail = 'error'; // el statusDetail podrías mostrarlo o no en la interfaz
    };
  }

  createNewProduct() {
    const newProduct: CreateProductDTO = {
      title: 'Nuevo producto 2',
      description: 'una descripcion, bla bla bla',
      images: ['https://placeimg.com/640/480/any', 'https://placeimg.com/640/480/any', 'https://placeimg.com/640/480/any'],
      categoryId: 3,
      price: 299
    }
    this.productsService.create(newProduct).subscribe(createdProduct =>{
      // console.log('Nuevo producto creado: ', createdProduct);
      this.products.unshift(createdProduct);
    });
  }
  updateOneProduct() {
    if (this.productChosen) {
      const changes: UpdateProductDTO = {
        price: 500,
        title: 'Nuevo título para este producto'
      }
      const id = this.productChosen?.id;
      this.productsService.update(id, changes).subscribe(updatedProduct =>{
        console.log('Producto actualizado: ', updatedProduct);

        const productIndex = this.products.findIndex( item =>item.id ==this.productChosen?.id );
        this.products[productIndex] = updatedProduct;
        this.productChosen = updatedProduct;

      });
    }
  }
  deleteProduct() {
    if (this.productChosen) {
      const id = this.productChosen?.id;
      this.productsService.delete(id).subscribe(() =>{
        console.log('Producto borrado: ');
        const productIndex = this.products.findIndex( item =>item.id ==this.productChosen?.id );
        this.products.splice(productIndex, 1);
        // cerramos el panel
        this.showProductDetail = false;
      });
    }
  }
}
