import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Product, CreateProductDTO, UpdateProductDTO } from './../models/product.model';
import { checkTime } from '../interceptors/time-http.interceptor';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private apiUrl = 'https://young-sands-07814.herokuapp.com/api';
  private apiUrl = 'https://damp-spire-59848.herokuapp.com/api';
  constructor(
    private http: HttpClient
  ) { }


  getAllProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products`, { context: checkTime() });
  }
  getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.apiUrl}/products`, {
      params: { limit, offset }, context: checkTime()
    })
    .pipe(
      retry(3),
      map(products => products.map(item => {
        return {
          ...item,
          taxes: .21 * item.price // impuestos
        }
      }) )
    );
  }
  getByCategory(categoryId: string, limit?: number, offset?: number) {
    let params = new HttpParams();
    if(limit && offset != null) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(`${this.apiUrl}/categories/${categoryId}/products`, {
      params,
      context: checkTime()
    });
  }
  getProduct(id: string) {  // contorl de errores aquí
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`, {context: checkTime()})
    .pipe(catchError( (error: HttpErrorResponse)=>{
      if (error.status === 500) { // HttpStatusCode.Conflict
        return throwError(()=> new Error('El servidor falló!'));
      } if (error.status === 404){ // HttpStatusCode.NotFound
        return throwError(()=> new Error('El producto no existe'));
      }
      return throwError(()=> new Error('Ups algo salió mal'));
    }));
  }
  create(dto: CreateProductDTO ) {
    return this.http.post<Product>(`${this.apiUrl}/products`, dto);
  }
  update(id: string, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`, dto);
  }
  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/products/${id}`);
  }
}
