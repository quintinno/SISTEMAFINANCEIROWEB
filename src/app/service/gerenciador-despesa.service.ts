import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DespesaModel } from '../model/despesa-model';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorDespesaService {

  private URL_BASE_API = environment.url_base_api_homologacao.concat("/despesa");

  constructor( private httpClient: HttpClient ) { }

  recuperarReceita() : Observable<DespesaModel[]> {
    return this.httpClient.get<DespesaModel[]>(`${this.URL_BASE_API}`);
  }

  cadastrarDespesa( despesaModel: DespesaModel ) : Observable<Object> {
    return this.httpClient.post(`${this.URL_BASE_API}`, despesaModel);
  }

  public recuperarDespesaFixaMensalList() : Observable<DespesaModel[]> {
    return this.httpClient.get<DespesaModel[]>(`${this.URL_BASE_API}/fixa-mensal`);
  }

  public recuperarTotalDespesasPagasAnoFinanceiro() : Observable<number> {
    return this.httpClient.get<number>(`${this.URL_BASE_API}/totalizador-despesas-pagas`);
  }

  public recuperarTotalDespesasPendentesAnoFinanceiro() : Observable<number> {
    return this.httpClient.get<number>(`${this.URL_BASE_API}/totalizador-despesas-pendentes`);
  }

}
