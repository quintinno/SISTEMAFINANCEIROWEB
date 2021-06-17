import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoReceitaModel } from "../model/tipo-receita-model";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTipoReceitaService {

<<<<<<< HEAD
  public URL_BASE_API_TIPO_RECEITA = "http://sistemafinanceiroapip.herokuapp.com/tipo-receita";
=======
  private URL_BASE_API_TIPO_RECEITA = environment.url_base_api.concat("/tipo-receita");
>>>>>>> master

  constructor( private httpClient: HttpClient ) { }

  recuperar() : Observable<TipoReceitaModel[]> {
    return this.httpClient.get<TipoReceitaModel[]>(`${this.URL_BASE_API_TIPO_RECEITA}`);
  }

}
