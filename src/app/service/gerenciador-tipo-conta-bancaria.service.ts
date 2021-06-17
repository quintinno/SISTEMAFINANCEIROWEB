import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { TipoContaBancariaModel } from "../model/tipo-conta-bancaria-model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTipoContaBancariaService {

  private URL_BASE_API_TIPO_CONTA_BANCARIA = environment.url_base_api.concat("/tipo-conta-bancaria");

  constructor( private httpClient: HttpClient ) { }

  recuperarTipoContaBancariaList() : Observable<TipoContaBancariaModel[]> {
    return this.httpClient.get<TipoContaBancariaModel[]>(`${this.URL_BASE_API_TIPO_CONTA_BANCARIA}`);
  }
  
}
