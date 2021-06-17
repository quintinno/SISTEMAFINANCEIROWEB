import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CategoriaReceitaModel } from "../model/categoria-receita-model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorCategoriaReceitaService {

<<<<<<< HEAD
  private URL_BASE_API_CATEGORRIA_RECEITA = "http://sistemafinanceiroapip.herokuapp.com/categoria-receita";
=======
  private URL_BASE_API_CATEGORRIA_RECEITA = environment.url_base_api.concat("/categoria-receita");
>>>>>>> master

  constructor( private httpClient: HttpClient ) { }

  recuperar() : Observable<CategoriaReceitaModel[]> {
    return this.httpClient.get<CategoriaReceitaModel[]>(`${this.URL_BASE_API_CATEGORRIA_RECEITA}`);
  }


}
