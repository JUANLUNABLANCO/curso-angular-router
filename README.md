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

// IMPORTANTE el codigo de los ficheros debe ser copiado directamente en el README.md entre 
``` comillas ``` para que se vea bien, porque por defecto un fichero de código borra los eol.



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


## Creando el Home (comunicación padre hijo | @Input) [vídeo-3]

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

![angular dev tools](screenshots/screenshot_01-devtools.png)


## Página de categorías (comunicación hijo-padre | @Output) [vídeo-4]

products.component.html
```
<div class="pagination">
    <button (click)="onPageDown()">Bajar página</button>
    <span> {{ page + 1 }}</span>
    <button (click)="onPageUp()">Subir Página</button>
</div>
```
products.component.ts
```
  @Input() page=0;  // este viene del padre home

  @Output() pageUp = new EventEmitter(); // estos van hacia el padre home
  @Output() pageDown = new EventEmitter();

  onPageUp(){ // el boton del html lanza este evento, lo emite
    this.pageUp.emit();
  }
  onPageDown(){
    this.pageDown.emit();
  }
```

home.component.html
```
<app-products [products]="products" [page]="page" (pageUp)="onPageUp()" (pageDown)="onPageDown()"></app-products>
```
Estos dos son inputs en el hijo products, se enviará la info al hijo para renderizarlo
[products]="products"
[page]="page"

En cambio estos son eventos lanzados desde el hijo pageUp y pageDown que lanzan el método onPageDown() y onPageUp()
(pageUp)="onPageUp()"
(pageDown)="onPageDown()

```
  // products
  products: Product[] = [];
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
```
Ahora toda la logica del componente porducts está en su padre home, la paginación y la recuperación de productos
desde el inicio, cuando se actualiza porducts, o page la información viaja del padre 'Home' al hijo 'Products'

vamos ahora con las categorías, para ello en el

app-routing.module.ts
```
  {
    path: 'category/:id',
    component: CategoryComponent
  },
```
hemos añadido un parámetro /:id que recibiremos en la petición de la url

category.component.ts
```
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

 ...
export class CategoryComponent {

  categoryId: string | null = null;
  constructor(
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
    });
  }
}
```
en la API externa tienes documentacion acerca del endpoint nuevo de categorias: 
https://damp-spire-59848.herokuapp.com/docs/

{GET}: /api/categories/{id}/products

también trae un limit y un offset

products.service.ts
```
  getByCategory(categoryId: string, limit: number, offset: number) {
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
```

category.component.ts
```
  categoryId: string | null = null;
  limit=10;
  offset=0;
  products: Product[] = [];

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
```

category.component.html
```
<app-products [products]="products" [page]="page" (pageUp)="onPageUp()" (pageDown)="onPageDown()"></app-products>
```

ahora la refactorización que hicimos con products y home nos sirve para poder reutilezar <app-products></app-products>
dentro de category.component

solo tenemos que crear una paginación similar o comunicar mediante input y output


## Evitar doble subscribe (callback hell) switchMap() [vídeo-5]

![callbackHell](screenshots/screenshot_02-callbackhell.png)

category.components.ts
```
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
```

category.component.ts --> mejorado sin callbach hell
```
  import { switchMap } from 'rxjs/operators';

  ngOnInit(): void {
    this.route.paramMap.
      .pipe(
        switchMap(params => {
          this.categoryId = params.get('id') || null;)
          if(this.categoryId) {
            return this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
          }
          // id vacío
          return [];
      )
      .subscribe((data) => {
        this.products = data;
      });
  }
```
Ahora se puede prescindir del template.html, es decir para una sola línea de código, esta:

<app-products [products]="products" [page]="page" (pageUp)="onPageUp()" (pageDown)="onPageDown()"></app-products>

no es necesario cargar un fichero, lo puedes indicar en el decorador del componente de esta manera:

products.component.html
```
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html', // cambiando esta línea por esto otro

  template:
  `<app-products [products]="products" [page]="page" (pageUp)="onPageUp()" (pageDown)="onPageDown()"></app-products>`

  styleUrls: ['./products.component.scss']
})
```

## RoutenrLink y RouterActive [vídeo-6]

La categorías aparecen arriba en la navegación y en el menú lateral, cuando es móvil, ahí es donde deben aparecer los links a las diferentes categorías, no que el usuario vaya a la url a escribirlas 

http:/localhost:4200/category/2

precisamente en el nav es donde aparecen dichos enlaces, veámos pues lo que deberíamos hacer:

nav.component.html
```
<div class="side-menu" [class.active]="activeMenu">
        <button (click)="toggleMenu()">Close</button>
        <ul>
            <li><a href="">All</a></li>
            <li><a href="">Clothes</a></li>
            <li><a href="">Electronics</a></li>
        </ul>
    </div>
```

como vemos no apuntan  a nada, cambiemos eso

nav.component.html
```
<div class="side-menu" [class.active]="activeMenu">
        <button (click)="toggleMenu()">Close</button>
        <ul>
            <li><a href="">All</a></li>
            <li><a href="">Clothes</a></li>
            <li><a href="">Electronics</a></li>
        </ul>
    </div>
```

en el servicio 'categories.service.ts', debemos hacer una petición a la API, que nos devuelva las categorías
devolverá un array con las mismas, esto nos podría servir para generar dinámicamente el nav de categorías

Y si en cualquier momento la API, cambia sus ids o añaden una nueva o lo que sea estará sincronizado con nuestra app.

> ng g s services/categories

categories.service.ts
```
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Category } from '../models/product.model';  // remember está en products

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiURL = "https://young-sands-07814.herokuapp.com/api";

  constructor(
    private http: HttpClient
  ) { }

  getAll(limit?: number, offset?: number) {
    let params = new HttpParams();
    if(limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Category[]>(`${this.apiURL}/categories`, {params});
  }
}
```

Ahora importamos el servicio en nav.component.ts

nav.component.ts
```
  import { CategoriesService } from 'src/app/services/categories.service';
  import { Category } from 'src/app/models/product.model';

  export class NavComponent implements OnInit {
  // ...
  categories: Category[] = [];

  ngOnInit(): void {
    // ...
    // categorias
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoriesService.getAll().subscribe(data=>{
      this.categories = data;
    });
  }
```

y añadiendo el routerLinkActive para que tome la clase .active de css, nos quedará así

nav.component.html
```
<ul>
    <li><a routerLinkActive="active" routerLink="home">All</a></li>
    <li *ngFor="let item of categories">
        <a class="active" [routerLink]="['/category', item.id]">{{ item.name }}</a>
    </li>
</ul>
```

## ruta 404 [vídeo-7]

Al final del routind

app-routing.module.ts
```
  ...
  {
    path: '**',
    component: NotFoundComponent
  }
];
```

notfound.component.ts
```
@Component({
  selector: 'app-not-found',
  template: '<div><img src="https://media.giphy.com/media/A9EcBzd6t8dzE/giphy.gif"></div>',
  styleUrls: ['./not-found.component.scss']
})
```

notfound.component.scss
```
div {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
```


## Detalle de cada producto [vídeo-8]


> ng g c pages/product-detail

app-routing.module.ts
```
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
```

product-detail.component.ts
```
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Product } from 'src/app/models/product.model';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: string | null = null;
  product: Product | null = null;
  constructor (
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params) => {
        this.productId = params.get('id');
        if (this.productId) {
          return this.productsService.getProduct(
            this.productId
          );
        }
        return [null];
      })
    )
    .subscribe((data)=>{
      this.product = data;
    })
  }
  goToBack() {
    this.router.navigate(['home']); // también podríamos usar location.back() pero te puede llevar a un sitio no deseado, por ejemplo fuera de la app
  }
}
```

product-detail.component.html
```
<div class="page-product">
    <button (click)="goToBack()">Back</button>
    <div class="detail" *ngIf="product">
        <div class="gallery">
            <swiper [slidesPerView]='1'>
                <ng-template swiperSlide *ngFor="let img of product?.images">
                    <img [src]="img" alt="img">
                </ng-template>
            </swiper>
        </div>
        <div>
            <h1>{{ product?.title }}</h1>
            <h2>{{ product?.price | currency }}</h2>
            <p>{{ product?.description }}</p>
        </div>
    </div>
</div>
```

product.component.html
```
<a [routerLink]="['/product', product.id]">
  <app-img *ngIf="product.images.length > 0" [img]="product.images[0]"></app-img>
</a>
 <!-- ... -->
```

## Parametros url [vídeo-9]

Queremos conseguir que cuando el detalle lateral se abra, sea totalmente sharedable 'compartible para ello debemos transformar la url del home para que diga algo así

.../home?product=1

estos son parámetros de Url del propio navegador y podemos aprovecharlos para nuetsro propósito.

home.component.html
```
<app-products
  [productId]="productId"
  [products]="products"
  [page]="page"
  (pageUp)="onPageUp()"
  (pageDown)="onPageDown()">
</app-products>
```

home.component.ts
```
// detail url params
  productId: string | null = null;

  ...
  ngOnInit(): void {
    this.productsService.getProductsByPage(this.limit, this.offset)
    .subscribe(data => {
      this.products = data;
    });
    // vigilar los parámetros url
    this.route.queryParamMap.subscribe(params => {
      this.productId = params.get('product');
      console.log(this.productId);
    });
  }
```

products.component.ts
```
  @Input() set productId(id: string | null) { // set estará vigilante a los cambios de ese productId
    if(id) {
      this.onShowDetailProduct(id);
    }
  }
```

product.component.html
```
<!-- <button (click)="onShowDetail()">Preview</button> -->  
<button routerLink="." [queryParams]="{product: product.id}">Preview</button>
```
hemos transformado el click por un enlace, ya que ya no será un evento @Output el que lo muestre sino, desde la url
por sus parametros, y la url es routerLink=".", que significa allá donde estemos, puede ser el '/home' o puede ser el '/category', recuerda que en ambos usamos <app-products></app-products>

Para ello debes añadir la lectura de queryParams en la página category, igual que en esta para que muestre el renderizado del detalle

// RESUMIENDO 

Es decir desde 'home' o 'category' le estamos comunicando a products el id de un producto para ver su detalle, a través del @input, (comunicación hacia abajo) y es el propio componente nieto 'product', el que al pinchar en su botón preview y a través del @Output() (comunicación hacia arriba), que emite el evento que recoje el abuelo 'home' o 'category', para obtener un productId, y al cambiar se ve reflejado en la lógica del componente gracias al @Input() set productId() que está vigilando los cambios...

El único problema que veo es un tema de UX/UI, cuando cerramos la ventana detalle de un producto, al querer abrir la misma ventana que antes, al no haber cambios en el 'productId', no realiza la acción.

Mi solución es esta, ya se que no es la definitiva ni la más eficiente

```
<button routerLink="." [queryParams]="{product: product.id}" (click)="onShowDetail()">Preview</button>
<button (click)="onAddToCart()">Add cart</button>
```

## LazyLoading y CodeSplitting [vídeo-10]

Repasemos los http request

![http requests](screenshots/screenshot_03-http.png)

Cada vez que nuewstra aplicación necesita renderizar algo, lee el html de arriba abajo y en cada link, url o imagen o css accede a esa parte con un request del elemento necesitado lo interpreta, esta acción no se demora mucho cuando estamos desarrollando, debido a que estamos en un entorno local, el servidor es local, ng serve.

request css, request images, request js, ... en js ocurre algo muy importante:

  1. descarga el js (esto es lo que más tarda)
  2. lo parsea
  3. lo compila
  4. lo ejecuta

el nº 1 depende de dos cosas, el peso del archivo y el internet que tenga el ususario final

Con lazy loading y code splitting, conseguiremos que estos tiempos sean menores o más eficientes, por ejemplo descargando partes de nuestra aplicación solo cuando sean necesarias y no desde el principio.

![webpack work](screenshots/screenshot_04-webpack.png)

webpack o el empaquetador que hayamos elegido, se encarga de diferentes cosas cuando se genera la aplicación en desarrollo o producción, en angular viene configurado por defecto, no tenemos que hacer nada extra para que haga algunas tareas básicas como pasar el ts a js, pasar el scss css, minimizar código, comprimir imágenes y agregarles un hash, etc. Y todo eso lo manda a archivos planos entendibles por el navegador y por los diferentes browsers debido al polyfills. 

Todos los .ts de typescript van a parar al main.js, code splitting lo que significa es no poner todo en un solo archivo, en este caso el main.js, webpack puede hacer una partición de dichos archivos en diferentes chunk.js

![code splitting](screenshots/screenshot_05-codesplitting.png)

Esta habilidad de webpack, para el caso de angular es conseguida a través de la programación modular, cada módulo para angular significará un chunk.js diferente para webpack. Por ejemplo:

  /home y /category podrían perfectamente ser dos módulos independientes, al igual que si nuestra aplicación fuese más grande y tuviera el módulo de vventas, pagos, clientes, etc. veámoslo:

## Programación Modular [víde-11]

![ng module](screenshots/screenshot_06-ngmodule.png)

Dentro de un módulo necesitamos a veces importar otros módulos, por ello el los imports del decorador 
app-module.ts
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';

import { TimeHttpInterceptor } from './interceptors/time-http.interceptor';
import { AddTokenInterceptor } from './interceptors/add-token.interceptor';

// pages componets routing
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MyCartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    HomeComponent,
    NotFoundComponent,
    CategoryComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SwiperModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimeHttpInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Las declarations, serían los componentes, pipes and directives utilizados dentro de un módulo
Los providers, vendrían a ser los servicios e interceptors, en nuestro caso no hemos inyectado ningún servicio, porque por defecto cuando se crean mediante el cli de angular vienen inyectados para toda la app desde el propio decorador de provider. 

```
@Injectable({
  providedIn: 'root'
})
```

Los exports, son las exportaciones de componentes de este módulo, en este caso AppComponent, es la forma en como se expone al exterior todo el módulo de app y por último y solo en el caso del módulo inicial AppModule, tenemos el bootstrap, que le indica a angular cual es el componente raíz dentro de este módulo, para poder exportarlo a otras partes de la aplicación, en nuestro caso el AppComponent, que será el módulo raíz de toda la app y por tanto no importado por nadie solo por el main.js.

![ng module parts](screenshots/screenshot_07-ngmodule-parts.png)

Como vemos en la imagen, un módulo puede tener todas esas partes, excepto los models que son interfaces reutilizadas por todos.

![piezas clave de angular](screenshots/screenshot_08-key-parts.png)

Como vemos en la imagen, nosotros ahora conocemos ekl funcionamiento de angular y esto nos da una ventaja a la hora de desarrollar en este framework, para poder crear componentes, servicios, módulos, etc.

Nosotros ya hemos usado diferentes tipos de módulos:

  1. Root Module
  2. Core Module
  3. Routing Module
  4. Feature/DomainModule
  5. SharedModule

El Root Module, es la app en sí.

Los CoreModule: son compartidos por los servicios.

El Routing Module, permite compartir el enrutamiento entre las diferentes partes de la app, como si fueran páginas diferentes, pero en realidad es una sola, porque estamos en SPA.

Los feature/Domain Module son módulos de negocio: ventas, clientes, pagos, estos son exclusivos del negocio que estamos implementando

Los sharedModule: para compartir por los componentes


## Vistas anidadas [vídeo12]

![vistas anidadas](screenshots/screenshot_09-vistas-anidadas.png)

Esto es lo que tenemos ahora en nuestro app-component

Vamos a empezar a subdividir y trocear la app, para que podamos empezar a hacer code splitting (programación modular)

creamos una carpeta llamada website y ahí ingresaremos todo lo que tenga que ver con nuestro sitio web y no sea un módulo o servicio genérico, como por ejemplo los servicios, los modelos, los interceptors

Meteremos por tanto, los siguientes:

1. components
2. directives
3. pages
4. pipes

Después de mover estos archivos haremos un ng serve para ver, que se ha roto y arreglarlo

> ng serve

Una vez corregidas las rutas e importaciones para que todo funcione nuevamente

> ng g c website/components/layout

creamos este nuevo componente layout dentro de website/layout

y ahora en 

app.component.html
```
<app-nav></app-nav>
<router-outlet></router-outlet>
```

modificamos para tener esto otro

app.component.html
```
<router-outlet></router-outlet>
```

y en layout tendremos esto otro:

layout.component.html
```
<app-nav></app-nav>
<router-outlet></router-outlet>
```

Ahora en app-routing.module.ts haremos algún cambio, en pricipio, lo teníamos así:

app-routing-module.ts
```
import { HomeComponent } from './website/pages/home/home.component';
...

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'category/:id',
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
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
```

pues ahora le diremos que layout es una ruta padre que contiene rutas hijas en su interior

app-routing-module.ts
```
import { HomeComponent } from './website/pages/home/home.component';
import { LayoutComponent } from './website/components/layout/layout.component';
...

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'category/:id',
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
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
```
Si ahora vamos al angular dev tools del navegador veremos esas diferencias:

![cambios layout](screenshots/Screenshot_10-layout-changes.png)

Con esto podremos crear otros módulos con diferentes layouts, es decir, si necesitamos un módulo que no cargue el <app-nav></app-nav>, podremos crear ese módulo con componentes diferentes a través del routing.module

Y esto lo hemos conseguido gracias a las vistas anidadas, veámos ahora como crear diferentes módulos.

## Creando el CMS Content Management Systeme Module (admin) [vídeo13](https://platzi.com/clases/2487-angular-modular/41195-creando-el-cms-module/)

Ahora tenemos el módulo website independiente de la app y crearemos un nuevo módulo de administración CMSModule
para poder insertar productos, editarlos, etc, este módulo no necesita al <app-nav></app-nav> y como vimos gracias a las vistas anidadas, hemos separado el website de nuestra app genérica y tendremos que separar el CMS creando un módulo independiente que compartirá algunas cosas de la app y otras serán exclusivas de este médulo...

> ng g m cms --routing

> ng g c cms/pages/tasks

> ng g c cms/pages/grid

> bg g c cms/components/layout

Ahora nuestro módulo cms es independiente del modulo app

![estructura de carpetas](screenshots/Screenshot_11-older-structure.png)







## NETLIFY

    > npm i -g netlify-cli

    > netlify --version

    > ng build --configuartion=production

    > netlify deploy --prod
        - create a new site: y
        - site name: <nombre-proyecto>
        - publish directory: dist		// en el caso de angular, y la mayoría de frameworks
