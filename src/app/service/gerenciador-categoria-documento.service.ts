import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaDocumentoModel } from '../model/categoria-documento-model';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorCategoriaDocumentoService {

  private URL_BASE_API = environment.url_base_api.concat("/categoria-documento");

  constructor( private httpClient: HttpClient ) { }

  public recuperarCategoriaDocumentoList() : Observable<CategoriaDocumentoModel[]> {
    return this.httpClient.get<CategoriaDocumentoModel[]>(`${this.URL_BASE_API}`);
  }

  public recuperarDocumentosNaoVinculadoPessoa( nomePessoa: string ) : Observable<CategoriaDocumentoModel[]> {
    return this.httpClient.get<CategoriaDocumentoModel[]>(`${this.URL_BASE_API}/categoria-documento-sem-vinculo-pessoa/${nomePessoa}`);
  }

}
