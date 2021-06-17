import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorService {

<<<<<<< HEAD
  // private URL_BASE_API = "http://sistemafinanceiroapip.herokuapp.com";
  private URL_BASE_API = "https://sistemafinanceiroapip.herokuapp.com";
=======
  private URL_BASE_API = environment.url_base_api;
>>>>>>> master

  constructor() { }

  public recuperarUrlBaseAPI() {
    return this.URL_BASE_API;
  }

}
