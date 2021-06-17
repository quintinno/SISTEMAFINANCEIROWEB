import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorService {

  // private URL_BASE_API = "http://sistemafinanceiroapip.herokuapp.com";
  private URL_BASE_API = "https://sistemafinanceiroapip.herokuapp.com";

  constructor() { }

  public recuperarUrlBaseAPI() {
    return this.URL_BASE_API;
  }

}
