import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParcelamentoModel } from "../model/parcelamento-model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorParcelamentoService {

  private URL_BASE_URL_PARCELAMENTO = "http://localhost:9090/parcelamento";

  constructor( private httpClient: HttpClient ) { }

  public recuperarParcelamentoList() : Observable<ParcelamentoModel[]> {
    return this.httpClient.get<ParcelamentoModel[]>(`${this.URL_BASE_URL_PARCELAMENTO}`);
  }

  public registrarPagamentoParcela(parcelamentoModel: ParcelamentoModel) : Observable<Object> {
    return this.httpClient.put(`${this.URL_BASE_URL_PARCELAMENTO}`, parcelamentoModel);
  }
  
}
