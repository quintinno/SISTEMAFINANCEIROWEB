import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContaBancariaModel } from '../model/conta-bancaria-model';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorContaBancariaService {

<<<<<<< HEAD
  private URL_BASE_API_CONTA_BANCARIA = "http://sistemafinanceiroapip.herokuapp.com/conta-bancaria";
=======
  private URL_BASE_API_CONTA_BANCARIA = environment.url_base_api.concat("/conta-bancaria");
>>>>>>> master

  constructor( private httpClient: HttpClient ) { }

  cadastrar( contaBancariaModel: ContaBancariaModel ) {
    return this.httpClient.post(`${this.URL_BASE_API_CONTA_BANCARIA}`, contaBancariaModel);
  }

  recuperarContaBancariaList() : Observable<ContaBancariaModel[]> {
    return this.httpClient.get<ContaBancariaModel[]>(`${this.URL_BASE_API_CONTA_BANCARIA}`);
  }
  
}
