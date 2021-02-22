import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoContaBancariaModel } from '../model/tipo-conta-bancaria-model';
import { TipoPeriodoFinanceiroModel } from '../model/tipo-periodo-financeiro-model';
import { ReceitaRemoverComponent } from '../page/gerenciador-receita/receita-remover/receita-remover.component';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTipoPeriodoFinanceiroService {

  private BASE_URL_API_TIPO_PERIODO_FINANCEIRO = "http://localhost:9090/tipo-periodo_financeiro";

  constructor( private httpClient: HttpClient ) { }

  recuperarTipoPeriodoFinanceiroList() : Observable<TipoPeriodoFinanceiroModel[]> {
    return this.httpClient.get<TipoContaBancariaModel[]>(`${this.BASE_URL_API_TIPO_PERIODO_FINANCEIRO}`);
  }

}
