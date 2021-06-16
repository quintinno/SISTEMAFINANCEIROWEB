import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorService {

  private URL_BASE_API = environment.url_base_api;

  constructor() { }

  public recuperarUrlBaseAPI() {
    return this.URL_BASE_API;
  }

}
