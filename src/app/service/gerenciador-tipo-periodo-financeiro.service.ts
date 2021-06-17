import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoContaBancariaModel } from '../model/tipo-conta-bancaria-model';
import { TipoPeriodoFinanceiroModel } from '../model/tipo-periodo-financeiro-model';
import { ReceitaRemoverComponent } from '../page/gerenciador-receita/receita-remover/receita-remover.component';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTipoPeriodoFinanceiroService {

<<<<<<< HEAD
  private BASE_URL_API_TIPO_PERIODO_FINANCEIRO = "http://sistemafinanceiroapip.herokuapp.com/tipo-periodo_financeiro";
=======
  private BASE_URL_API_TIPO_PERIODO_FINANCEIRO = environment.url_base_api.concat("/tipo-periodo_financeiro");
>>>>>>> master

  constructor( private httpClient: HttpClient ) { }

  recuperarTipoPeriodoFinanceiroList() : Observable<TipoPeriodoFinanceiroModel[]> {
    return this.httpClient.get<TipoContaBancariaModel[]>(`${this.BASE_URL_API_TIPO_PERIODO_FINANCEIRO}`);
  }

}
