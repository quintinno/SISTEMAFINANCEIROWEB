import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoSituacaoPagamentoModel } from '../model/tipo-situacao-pagamento-model';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTipoSituacaoPagamentoService {

<<<<<<< HEAD
  private URL_BASE_API_TIPO_SITUACAO_PAGAMENTO = "http://sistemafinanceiroapip.herokuapp.com/tipo-situacao-pagamento";
=======
  private URL_BASE_API_TIPO_SITUACAO_PAGAMENTO = environment.url_base_api.concat("/tipo-situacao-pagamento");
>>>>>>> master

  constructor( private httpClient: HttpClient ) { }

  recuperarTipoSituacaoPagamentoList() : Observable<TipoSituacaoPagamentoModel[]> {
    return this.httpClient.get<TipoSituacaoPagamentoModel[]>(`${this.URL_BASE_API_TIPO_SITUACAO_PAGAMENTO}`);
  }
  
}
