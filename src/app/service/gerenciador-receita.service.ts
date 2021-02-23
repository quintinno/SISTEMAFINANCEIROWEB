import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReceitaModel } from '../model/receita-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorReceitaService {

  private URL_BASE_API_RECEITA = "http://localhost:9090/receita";

  constructor( private httpClient: HttpClient) { }

  recuperarReceita() : Observable<ReceitaModel[]> {
    return this.httpClient.get<ReceitaModel[]>(`${this.URL_BASE_API_RECEITA}`);
  }

  recuperarReceitaPorId(codigo: number) : Observable<ReceitaModel> {
    return this.httpClient.get<ReceitaModel>(`${this.URL_BASE_API_RECEITA}/${codigo}`);
  }

  cadastrarReceita(receitaModel: ReceitaModel) : Observable<Object> {
    return this.httpClient.post(`${this.URL_BASE_API_RECEITA}`, receitaModel);
  }

  atualizarReceita(codigo: number, receitaModel: ReceitaModel) : Observable<Object> {
    return this.httpClient.put(`${this.URL_BASE_API_RECEITA}/${codigo}`, receitaModel);
  }

  removerReceita(codigo: number) : Observable<Object> {
    return this.httpClient.delete(`${this.URL_BASE_API_RECEITA}/${codigo}`);
  }

  recuperarReceitaFixaList() : Observable<ReceitaModel[]> {
    return this.httpClient.get<ReceitaModel[]>(`${this.URL_BASE_API_RECEITA}/fixa`);
  }

  recuperarReceitaVariavelList() : Observable<ReceitaModel[]> {
    return this.httpClient.get<ReceitaModel[]>(`${this.URL_BASE_API_RECEITA}/variavel`);
  }

}
