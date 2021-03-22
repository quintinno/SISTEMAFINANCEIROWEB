import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaModel } from "../model/pessoa-model";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorPessoaService {

  private URL_BASE_API = "http://localhost:9090/pessoa";

  constructor( private httpClient: HttpClient ) { }

  cadastrar( pessoaModel: PessoaModel ) {
    return this.httpClient.post(`${this.URL_BASE_API}`, pessoaModel);
  }

  recuperarPessoaList() : Observable<PessoaModel[]> {
    return this.httpClient.get<PessoaModel[]>(`${this.URL_BASE_API}`);
  }

  recuperarPessoaJuridicaList() : Observable<PessoaModel[]> {
    return this.httpClient.get<PessoaModel[]>(`${this.URL_BASE_API}/juridica`);
  }

  recuperarPessoaFisicaList() : Observable<PessoaModel[]> {
    return this.httpClient.get<PessoaModel[]>(`${this.URL_BASE_API}/fisica`);
  }

  remover( codigo: number ) : Observable<Object> {
    return this.httpClient.delete(`${this.URL_BASE_API}/${codigo}`);
  }

  recuperarPessoaFinanceiraSistemaList() : Observable<PessoaModel[]> {
    return this.httpClient.get<PessoaModel[]>(`${this.URL_BASE_API}/recuperar-pessoa-financeira-sistema`);
  }

}
