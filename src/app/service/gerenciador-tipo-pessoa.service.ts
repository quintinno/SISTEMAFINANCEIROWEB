import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PessoaModel } from '../model/pessoa-model';
import { TipoPessoaModel } from '../model/tipo-pessoa-model';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTipoPessoaService {

  private URL_BASE_API = environment.url_base_api_homologacao.concat("/tipo-pessoa");

  public tipoPessoaModelList: TipoPessoaModel[];

  public tipoPessoaModel: PessoaModel = new PessoaModel();

  constructor( private router: Router, private httpClient: HttpClient ) { }

  recuperarTipoPessoa() {
    return this.httpClient.get<TipoPessoaModel[]>(`${this.URL_BASE_API}`);
  }

  recuperarTipoPessoaPorCodigo(codigo: number) : Observable<TipoPessoaModel> {
    return this.httpClient.get<TipoPessoaModel>(`${this.URL_BASE_API}/${codigo}`);
  }

}
