import { Component, OnInit } from '@angular/core';

import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';

import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  imgParent = '';
  showImg = true;
  // token='';
  imgFile = '';

  constructor(
    private usersService: UsersService,
    private filesService: FilesService,
    private authService: AuthService,
    private tokenService: TokenService
  ){}

  ngOnInit(): void {
    const token = this.tokenService.getToken();
    if(token) {
      this.authService.getProfile()
      .subscribe(()=>{
        console.log('AppComponent ngOnInit: ', token);
        console.log('Existe token en localStorage');
      });
    }else {
      console.log('NO existe token en localStorage');
    }
  }

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  downloadPDF() {
    this.filesService.getFile(
      'Angular 2 y el futuro de la web',
      '/assets/downloads/Angular 2 y el futuro de las arquitecturas web.pdf',
      'application/pdf'
      )
    .subscribe()
  }

  onUploadFile(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.filesService.uploadFile(file)
      .subscribe(response => {
        this.imgFile = response.location;
      });
    }
  }
}
