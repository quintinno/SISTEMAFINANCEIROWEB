import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContratoModel } from '../model/contrato-model';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorContratoService {

<<<<<<< HEAD
  private URL_BASE_API_CONTRATO = "http://sistemafinanceiroapip.herokuapp.com/contrato";
=======
  private URL_BASE_API_CONTRATO = environment.url_base_api.concat("/contrato");
>>>>>>> master

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

  isExistePessoaContratadaVinculadaContrato( codigo: number ) : Observable<Boolean> {
    return this.httpClient.get<Boolean>(`${this.URL_BASE_API_CONTRATO}/verificar-vinculo-pessoa-contratada/${codigo}`);
  }

}
