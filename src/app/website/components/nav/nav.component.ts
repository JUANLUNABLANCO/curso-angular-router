import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../../services/store.service';

import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/product.model';

import { User } from 'src/app/models/user.model';
import {AuthService} from '../../../services/auth.service';
import {UsersService} from '../../../services/users.service';


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
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    // carrito
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
    // categorias
    this.getAllCategories();
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  createUser() {
    this.usersService.create({
      name: 'Joh Moon',
      email: 'johnydeep@gmail.com',
      password: '12345678'
    })
    .subscribe(respuesta => {
      console.log(respuesta);
    })
  }

  login() {
    this.authService.loginAndGetProfile('johnydeep@gmail.com', '12345678')
    .subscribe(user => {
      console.log(user);
      this.profile = user;
    });
  }
  getAllCategories() {
    this.categoriesService.getAll().subscribe(data=>{
      this.categories = data;
    });
  }
}
