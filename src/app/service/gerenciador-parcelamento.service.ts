import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParcelamentoModel } from "../model/parcelamento-model";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorParcelamentoService {

  private URL_BASE_URL_PARCELAMENTO = environment.url_base_api.concat("/parcelamento");

  constructor( private httpClient: HttpClient ) { }

  public recuperarParcelamentoList() : Observable<ParcelamentoModel[]> {
    return this.httpClient.get<ParcelamentoModel[]>(`${this.URL_BASE_URL_PARCELAMENTO}`);
  }

  public recuperarParcelamentoPorCodigoReceitaList( codigoReceita: number ) : Observable<ParcelamentoModel[]> {
    return this.httpClient.get<ParcelamentoModel[]>(`${this.URL_BASE_URL_PARCELAMENTO}/receita/${codigoReceita}`);
  }

  public registrarPagamentoParcela(parcelamentoModel: ParcelamentoModel) : Observable<Object> {
    return this.httpClient.put(`${this.URL_BASE_URL_PARCELAMENTO}`, parcelamentoModel);
  }

  public recuperarValorTotalDespesasFixasMesCorrente() : Observable<number> {
    return this.httpClient.get<number>(`${this.URL_BASE_URL_PARCELAMENTO}/despesa/valor-total-despesa-fixa-mes-corrente`);
  }
  
}
