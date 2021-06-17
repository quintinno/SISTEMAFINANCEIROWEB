import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { TipoContratoModel } from '../model/tipo-contrato-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTipoContratoService {

<<<<<<< HEAD
  private URL_BASE_API_TIPO_CONTRATO = "http://sistemafinanceiroapip.herokuapp.com/tipo-contrato";
=======
  private URL_BASE_API_TIPO_CONTRATO = environment.url_base_api.concat("/tipo-contrato");
>>>>>>> master

  constructor( private httpClient: HttpClient ) { }

  recuperarTipoContratoList() : Observable<TipoContratoModel[]> {
    return this.httpClient.get<TipoContratoModel[]>(`${this.URL_BASE_API_TIPO_CONTRATO}`);
  }

}
