import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { TipoContratoModel } from '../model/tipo-contrato-model';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTipoContratoService {

  private URL_BASE_API_TIPO_CONTRATO = "http://localhost:9090/tipo-contrato";

  constructor( private httpClient: HttpClient ) { }

  recuperarTipoContratoList() : Observable<TipoContratoModel[]> {
    return this.httpClient.get<TipoContratoModel[]>(`${this.URL_BASE_API_TIPO_CONTRATO}`);
  }

}
