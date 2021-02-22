import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PessoaModel } from '../model/pessoa-model';
import { TipoPessoaModel } from '../model/tipo-pessoa-model';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTipoPessoaService {

  public URL_BASE_API_TIPO_PESSOA = "http://localhost:9090/tipo-pessoa";

  public tipoPessoaModelList: TipoPessoaModel[];

  public tipoPessoaModel: PessoaModel = new PessoaModel();

  constructor( private router: Router, private httpClient: HttpClient ) { }

  recuperarTipoPessoa() {
    return this.httpClient.get<TipoPessoaModel[]>(`${this.URL_BASE_API_TIPO_PESSOA}`);
  }

  recuperarTipoPessoaPorCodigo(codigo: number) : Observable<TipoPessoaModel> {
    return this.httpClient.get<TipoPessoaModel>(`${this.URL_BASE_API_TIPO_PESSOA}/${codigo}`);
  }

}
