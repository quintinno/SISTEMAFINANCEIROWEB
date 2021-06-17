import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReceitaModel } from '../model/receita-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorReceitaService {

<<<<<<< HEAD
  private URL_BASE_API_RECEITA = "http://sistemafinanceiroapip.herokuapp.com/receita";
  private URL_BASE_API_RECEITA_TOTALIZADOR_RECEITA_RECEBIDA = "http://sistemafinanceiroapip.herokuapp.com/receita/totalizador-receita-recebida";
  private URL_BASE_API_RECEITA_TOTALIZADOR_RECEITA_PENDENTE = "http://sistemafinanceiroapip.herokuapp.com/receita/totalizador-receita-pendente";
=======
  private URL_BASE_API_RECEITA = environment.url_base_api.concat("/receita");
  private URL_BASE_API_RECEITA_TOTALIZADOR_RECEITA_RECEBIDA = environment.url_base_api.concat("/receita/totalizador-receita-recebida");
  private URL_BASE_API_RECEITA_TOTALIZADOR_RECEITA_PENDENTE = environment.url_base_api.concat("/receita/totalizador-receita-pendente");
>>>>>>> master

  constructor( private httpClient: HttpClient) { }

  recuperarReceita() : Observable<ReceitaModel[]> {
    return this.httpClient.get<ReceitaModel[]>(`${this.URL_BASE_API_RECEITA}`);
  }

  recuperarReceitaPorCodigo(codigo: number) : Observable<ReceitaModel> {
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

  recuperarTotalizadorReceitaRecebida() : Observable<number> {
    return this.httpClient.get<number>(`${this.URL_BASE_API_RECEITA_TOTALIZADOR_RECEITA_RECEBIDA}`);
  }

  recuperarTotalizadorReceitaPendente() : Observable<number> {
    return this.httpClient.get<number>(`${this.URL_BASE_API_RECEITA_TOTALIZADOR_RECEITA_PENDENTE}`);
  }

}
