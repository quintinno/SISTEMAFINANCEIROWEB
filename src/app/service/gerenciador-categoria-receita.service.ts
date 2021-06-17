import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CategoriaReceitaModel } from "../model/categoria-receita-model";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorCategoriaReceitaService {

  private URL_BASE_API_CATEGORRIA_RECEITA = "http://sistemafinanceiroapip.herokuapp.com/categoria-receita";

  constructor( private httpClient: HttpClient ) { }

  recuperar() : Observable<CategoriaReceitaModel[]> {
    return this.httpClient.get<CategoriaReceitaModel[]>(`${this.URL_BASE_API_CATEGORRIA_RECEITA}`);
  }


}
