import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DespesaModel } from '../model/despesa-model';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorDespesaService {

  private URL_BASE_API_DESPESA = "http://localhost:9090/despesa";

  constructor( private httpClient: HttpClient ) { }

  recuperarReceita() : Observable<DespesaModel[]> {
    return this.httpClient.get<DespesaModel[]>(`${this.URL_BASE_API_DESPESA}`);
  }

  cadastrarDespesa( despesaModel: DespesaModel ) : Observable<Object> {
    return this.httpClient.post(`${this.URL_BASE_API_DESPESA}`, despesaModel);
  }

}
