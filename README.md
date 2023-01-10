# CURSO DE ANGULAR 04: ANGULAR ROUTER

https://platzi.com/clases/2487-angular-modular/41183-bienvenida/
# LINK TO GITHUB PROJECT

  https://github.com/JUANLUNABLANCO/curso-angular-router

## CREATED BY

Juan Manuel Luna Blanco
[Instagram: gotth3way](https://www.instagram.com/gotth3way.apis/)
[Instagram: Kryptonite](https://www.instagram.com/kryptonite.original/)

[Linkedin](https://www.linkedin.com/in/juan-manuel-luna-blanco-180a1570/)

[Youtube: desarrolladorhoy](https://www.youtube.com/channel/UCSEwIRkDJxLkbvKHOAcw_Xw)
[Youtube: Kryptonite](https://www.youtube.com/channel/UCSEwIRkDJxLkbvKHOAcw_Xw)

## INSTALACIONES

> node -v                 // v16.17.0
> npm -v                  // 8.15.0
> npm i -g @angular/cli
> ng version              // 16.17.0

## CREAR UN PROYECTO CON EL CLI DE ANGULAR

> ng new my-store-app-api
> cd my-store-app-api
> ng serve

visit (http://localhost:4200)

## SOME THINGS OF THIS CLI

### MyStoreWithAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Arrancar el servidor de desarrollo

> ng serve -o                 // servir el proyecto
> ng serve -o --port=3500     //  en el puerto especificado
> ng version

```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
```

Angular CLI: 15.0.4
Node: 16.17.0
Package Manager: npm 8.15.0
OS: win32 x64
Angular: 15.0.4

... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.4
@angular-devkit/build-angular   15.0.4
@angular-devkit/core            15.0.4
@angular-devkit/schematics      15.0.4
@schematics/angular             15.0.4
rxjs                            7.5.7
typescript                      4.8.4

## Archivos importantes de Configuración

### archivos de configuración de typescript y angular

tsconfig.json
tsconfig.app.json
tsconfig.spec.json


### browser listado de compatibilidades

.browserlistrc


### editor

.editorconfig


### angular

angular.json


### testing

karma.conf.json


### Node version manager

.nvmrc

### Extensiones de VSC

Angular language Service
editor config
eslint

## Linter para el proyecto

> npm install eslint --save-dev   // lo instala

## ESLINT EXTENSION

The extension uses the ESLint library installed in the opened workspace folder. If the folder doesn't provide one the extension looks for a global install version. If you haven't installed ESLint either locally or globally do so by running <b>npm install eslint</b> in the workspace folder for a local install or npm install -g eslint for a global install.

On new folders you might also need to create a .eslintrc configuration file. You can do this by either using the VS Code command Create ESLint configuration or by running the eslint command in a terminal. If you have installed ESLint globally (see above) then run

> eslint --init

in a terminal. If you have installed ESLint locally then run

> .\node_modules\.bin\eslint --init

under Windows and ./node_modules/.bin/eslint --init under Linux and Mac.

## Aplicar un Linter (buenas prácticas de angular)

> ng lint // comando para revisar el código, sino hay ningún linter, nos informa de los linters disponibles en angular

Instalaremos este

> ng add @angular-eslint/schematics

Y ahora si podemos ejecutar el comando anterior
> ng lint // ahora analizará el código en busca de errores

al ejecutarlo nos muestra los errores y malas practicas, hay algunos que no se pueden evitar, deberíamos poder deshabilitar el error o el warning de alguna manera

También puedes modificar e implementar tus propias reglas de codificación editando el archivo .eslintrc.json que fue creado en la raíz del proyecto.


## SOME PROBLEMS WITH TSCONFIG

If you receive this problem for the linter in some files:

  parsing error: Cannot read file 'tsconfig.json'

That is because, the linter cannot find this tsconfig.json

Do that:

 .eslintrc.json 
```
        "project": [
          "tsconfig.json"
        ],

        cambia esa línea por la siguiente

        "project": [
          "**/tsconfig.json"
        ],
``` 

## SOME PROBLEMS WITH .eslintrc.json

if you recibe this problem in the .eslintrc.json:

  "No inputs where found in config file"

You can change that in this file:

 .eslintrc.json 
```
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}
``` 

 to

 .eslintrc.json
```
{
  "compilerOptions": {
    "moduleResolution": "node"
  },
  "include": [
    "./src/**/*.ts"
  ]
}
```


## GIT CONFIGURATIONS

git init
git config --local user.email "desarrolloaplicacionesweb.jmlb@gmail.com"
git config --local user.name "JUANLUNABLANCO"
git branch -M  main

	En este punto debes crear un repositorio nuevo en github vac铆o y enlazarlo

	<!-- > git remote add origin https://github.com/JUANLUNABLANCO/<tu-repo>.git -->
	> git remote add origin https://github.com/JUANLUNABLANCO/curso-angular-router.git
	> git config --list
	> git add .
	> git commit -m "scaffolding project with webpack"
	> git push -u origin main

## PROBLEMAS CON EL EOL EN W10

> git config --global core.autocrlf true

pondrá todos los ficheros que tengan un salto de línea en \r\n, que es lo que necesita windows, en vez de 
\n que es lo que necesita los sistemas unix

con eso, en el README.md podrás leerlo como se espera

tras esa configuración y para que surta efecto debes de hacer lo sigueinte

> git add --renormalize .

> git commit -m "Renormalizing eofile eolines"

> git push origin main	
## Extensiones del navegador

	JSON Formatter
	Angular dev tools << DEPENDIENDO DEL TIPO DE TECNOLOGÍA HABRÁ UNA U OTRA >>

## Cliente APIS
	### apps externas
	
		Insomnia.rest << DEPENDIENDO DEL TIPO DE TECNOLOGÍA HABRÁ UNA U OTRA >>
		Postman

	### extension de VSC
	
		Thunder client << DEPENDIENDO DEL TIPO DE TECNOLOGÍA HABRÁ UNA U OTRA >>

## npm aditional installations

	> npm install date-fns --save << DEPENDIENDO DEL TIPO DE TECNOLOGÍA HABRÁ UNA U OTRA >>
	

## CREANDO RUTAS [vídeo-2]

páginas a crear, para las routes: Se crean como componentes pero se meten en la carpeta pages porque serán componentes de tipo routes.

ng g c pages/home
ng g c pages/notFound
ng g c pages/category
ng g c pages/mycart
ng g c pages/login
ng g c pages/register
ng g c pages/recovery
ng g c pages/profile


Ahora con router-oulet manejaremos rutas y no renderizaremos nuestro app-products directamente el router-outlet se encargará.

 app.component.html
```
<app-nav></app-nav>
<router-outlet></router-outlet>
<!-- <app-products></app-products> -->
```

Automáticamente el cli de angular añade por cada componente lo siguiente en el app.module.ts

 app.module.ts
```
  ...
  import { NotFoundComponent } from './pages/not-found/not-found.component';
  import { CategoryComponent } from './pages/category/category.component';
  import { MyCartComponent } from './pages/my-cart/my-cart.component';
  import { LoginComponent } from './pages/login/login.component';
  import { RegisterComponent } from './pages/register/register.component';
  import { RecoveryComponent } from './pages/recovery/recovery.component';
  import { ProfileComponent } from './pages/profile/profile.component';

  @NgModule({
    declarations: [
      ...
      HomeComponent,
      NotFoundComponent,
      CategoryComponent,
      MyCartComponent,
      LoginComponent,
      RegisterComponent,
      RecoveryComponent,
      ProfileComponent
      ],
```

Para crear el routing con esas páginas tenemos que importarlas en app.routing.ts

 app.routing.ts
```
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';

const route: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'my-cart',
    component: MyCartComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'recovery',
    component: RecoveryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Ahora el router outlet no muestra nada, porque no tenemos una ruta por defecto que nos lleve al home por ejemplo, pero si pones: localhost://home podrás ver el home y así con cada ruta definida.


## Lazy loading y Programación modular [vídeo-3]

ahora en el componente home

 home.component.html
```
<app-products></app-products>
```

y si vamos a http://localhost:4200/home

veremos los productos renderizados, como los teníamos antes.

Para que renderice el home por defecto podemos hacer lo siguiente

 app-routing.module.ts
```
  ...
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  ...
```

Vamos a hacer unos cambios en el products.component.ts para que nos sirva para las categorías, para ello icluiremos un Input y algunas cosas

 Estado actual del products.component.ts
```
import { Component, OnInit } from '@angular/core';

import { Product, CreateProductDTO, UpdateProductDTO } from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetail = false;
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: ''
};

  // pagination
  limit=10;
  offset=0;
  page=0;
  MAX_PRODUCTS_IN_BD = 50;  // esto debería consultarse a productService

  // statusDetail
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }
  
  ngOnInit(): void {
    // this.productsService.getAllProducts()  // SIN PAGINATION
    // .subscribe(data => {
      //   this.products = data;
    // });
    this.productsService.getProductsByPage(this.limit, this.offset)
    .subscribe(data => {
      this.products = data;
    });
  }
  
  pageUp(){
    if (this.limit * (this.page + 1) < this.MAX_PRODUCTS_IN_BD ) {
      this.page += 1;
      this.offset = this.limit * this.page;
      this.productsService.getProductsByPage(this.limit, this.offset)
        .subscribe(data => {
          this.products = data;
      });
    }
  }
  
  pageDown(){
    if ((this.page - 1) >= 0 ) {
      this.page -= 1;
      this.offset = this.limit * this.page;
      this.productsService.getProductsByPage(this.limit, this.offset)
        .subscribe(data => {
          this.products = data;
      });
    }
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
    const changes: UpdateProductDTO = {
      price: 500,
      title: 'Nuevo título para este producto'
    }
    const id = this.productChosen.id;
    this.productsService.update(id, changes).subscribe(updatedProduct =>{
      console.log('Producto actualizado: ', updatedProduct);

      const productIndex = this.products.findIndex( item =>item.id ==this.productChosen.id );
      this.products[productIndex] = updatedProduct;
      this.productChosen = updatedProduct;

    });
  }
  deleteProduct() {
    const id = this.productChosen.id;
    this.productsService.delete(id).subscribe(() =>{
      console.log('Producto borrado: ');
      const productIndex = this.products.findIndex( item =>item.id ==this.productChosen.id );
      this.products.splice(productIndex, 1);
      // cerramos el panel
      this.showProductDetail = false;
    });
  }
}
```

Cambios a realizar

 products.component.ts 
```
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
```
 products.component.html 
```
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
```

home.component.ts
```
import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: ''
  };
  // pagination
  limit=10;
  offset=0;
  page=0;
  MAX_PRODUCTS_IN_BD = 50;  // esto debería consultarse a productService


  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getProductsByPage(this.limit, this.offset)
    .subscribe(data => {
      this.products = data;
    });
  }
  pageUp(){
    if (this.limit * (this.page + 1) < this.MAX_PRODUCTS_IN_BD ) {
      this.page += 1;
      this.offset = this.limit * this.page;
      this.productsService.getProductsByPage(this.limit, this.offset)
        .subscribe(data => {
          this.products = data;
      });
    }
  }
  pageDown(){
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
```

home.component.html
```
<app-products [products]="products"></app-products>
```


// LOGICA @Input
Los productos son recuperados [products]="products", gracias a esta directiva en el hijo a través de un @Input() products: Product[] = []; que en el OnInit() del componente padre se recuperan gracias al servicio que busca la data, y rellena el this.products al que hace referencia la directiva ="products", por tanto el padre
manda a pedir lo que le indica el hijo en la directiva y se lo pasa hacia abajo es una comunicación de:

-- Yo soy tu hijo que vive dentro del padre y te pido X a través de una directiva
-- Yo soy el padre recojo la petición y lo primero que hago es a través de un servicio recuperar lo que me pides y devolverlo en this.X
-- Yo soy el hijo, <products> recibo la data desde el padre 'home' y la renderizo en mi componente de products, que tengo dentro de mi
-- products a su vez es un componente tipo lista que renderiza uno a uno un <product></product>

Esto es una comunicación hacia adentro del padre al hijo

// IMPORTANT !!! esta lógica es importantísima tenerla a la orden del día, así como la del @Output, que vamos a usarla en la paginación, comunicación desde el hijo al padre de abajo a arriba

// REVISA angulardevtools en el navegador verás la estructura de la página

![snappshoot angular dev tools](/snapshoots/Screenshot_1.png)







## NETLIFY

    > npm i -g netlify-cli

    > netlify --version

    > ng build --configuartion=production

    > netlify deploy --prod
        - create a new site: y
        - site name: <nombre-proyecto>
        - publish directory: dist		// en el caso de angular, y la mayoría de frameworks
