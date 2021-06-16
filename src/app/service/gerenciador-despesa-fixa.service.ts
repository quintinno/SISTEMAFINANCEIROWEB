import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DespesaFixaModel } from '../model/despesa-fixa-model';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorDespesaFixaService {

  private URL_BASE_API = environment.url_base_api.concat("/despesa-fixa/cadastrar");

  constructor( private httpClient: HttpClient ) { }

  public cadastrarDespesaFixa(despesaFixaModel: DespesaFixaModel) : Observable<Object> {
    return this.httpClient.post(`{this.URL_BASE_API}`, despesaFixaModel);
  }

}
