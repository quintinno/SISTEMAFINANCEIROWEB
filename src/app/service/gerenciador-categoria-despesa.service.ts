import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaDespesaModel } from '../model/categoria-despesa-model';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorCategoriaDespesaService {

  private URL_BASE_API_CATEGORIA_DESPESA = "http://localhost:9090/categoria-despesa";

  constructor( private httpClient: HttpClient ) { }

  recuperarCategoriaDespesaList() : Observable<CategoriaDespesaModel[]> {
    return this.httpClient.get<CategoriaDespesaModel[]>(`${this.URL_BASE_API_CATEGORIA_DESPESA}`);
  }


}
