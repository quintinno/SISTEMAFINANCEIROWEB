import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContratoModel } from '../model/contrato-model';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorContratoService {

  private URL_BASE_API_CONTRATO = "http://localhost:9090/contrato";

  constructor( private httpClient: HttpClient ) { }

  cadastrarContrato( contratoModel: ContratoModel ) : Observable<Object> {
    return this.httpClient.post(`${this.URL_BASE_API_CONTRATO}`, contratoModel);
  }

  recuperarContratoList() : Observable<ContratoModel[]> {
    return this.httpClient.get<ContratoModel[]>(`${this.URL_BASE_API_CONTRATO}`);
  }

  recuperarContratoPorCodigo( codigo: number ) : Observable<ContratoModel> {
    return this.httpClient.get<ContratoModel>(`${this.URL_BASE_API_CONTRATO}/${codigo}`);
  }

}
