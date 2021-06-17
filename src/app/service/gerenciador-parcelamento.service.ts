import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParcelamentoModel } from "../model/parcelamento-model";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorParcelamentoService {

<<<<<<< HEAD
  private URL_BASE_URL_PARCELAMENTO = "http://sistemafinanceiroapip.herokuapp.com/parcelamento";
=======
  private URL_BASE_URL_PARCELAMENTO = environment.url_base_api.concat("/parcelamento");
>>>>>>> master

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
  
}
