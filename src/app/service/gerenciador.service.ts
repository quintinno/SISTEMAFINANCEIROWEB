import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorService {

  // private URL_BASE_API = "http://localhost:9090";
  private URL_BASE_API = "https://sistemafinanceiroapi.herokuapp.com";

  constructor() { }

  public recuperarUrlBaseAPI() {
    return this.URL_BASE_API;
  }

}
