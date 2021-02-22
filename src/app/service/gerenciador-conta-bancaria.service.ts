import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContaBancariaModel } from '../model/conta-bancaria-model';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorContaBancariaService {

  private URL_BASE_API_CONTA_BANCARIA = "http://localhost:9090/conta-bancaria";

  constructor( private httpClient: HttpClient ) { }

  cadastrar( contaBancariaModel: ContaBancariaModel ) {
    return this.httpClient.post(`${this.URL_BASE_API_CONTA_BANCARIA}`, contaBancariaModel);
  }

  recuperarContaBancariaList() : Observable<ContaBancariaModel[]> {
    return this.httpClient.get<ContaBancariaModel[]>(`${this.URL_BASE_API_CONTA_BANCARIA}`);
  }
  
}
