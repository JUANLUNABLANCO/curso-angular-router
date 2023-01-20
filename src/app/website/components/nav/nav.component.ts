import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../../services/store.service';

import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/product.model';

import { User } from 'src/app/models/user.model';
import {AuthService} from '../../../services/auth.service';
import {UsersService} from '../../../services/users.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  categories: Category[] = [];

  // token='';
  profile: User | null = null;

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private usersService: UsersService,
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // carrito
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
    // categorias
    this.getAllCategories();
    // estado user
    this.authService.user$
    .subscribe(data => {this.profile = data});
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  // createUser() {
  //   this.usersService.create({
  //     name: 'Joh Moon',
  //     email: 'albondiga@gmail.com',
  //     password: '12345678',
  //     role: 'customer'
  //   })
  //   .subscribe(respuesta => {
  //     console.log('create customer: ', respuesta);
  //   })
  // }
  // createAdmin() {
  //   this.usersService.create({
  //     name: 'Mongolo',
  //     email: 'admin2@mail.com',
  //     password: 'admin123',
  //     role: 'admin'
  //   })
  //   .subscribe(respuesta => {
  //     console.log('create admin: ', respuesta);
  //   })
  // }
  login() {// este siempre estará {'maria@mail.com', '12345'}
    this.authService.loginAndGetProfile('maria@mail.com', '12345')
    .subscribe(()=>{
      this.router.navigate(['/profile']);
    });
  }
  loginAdmin() {
    this.authService.loginAndGetProfile('admin2@mail.com', 'admin123')
    .subscribe(()=>{
      this.router.navigate(['/profile']);
    });
  }
  logout() {
    this.authService.logout();
    this.profile = null;
    this.router.navigate(['/home']);
  }
  getAllCategories() {
    this.categoriesService.getAll().subscribe(data=>{
      this.categories = data;
    });
  }
}
