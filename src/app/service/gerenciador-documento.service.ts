import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DocumentoModel } from '../model/documento-model';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorDocumentoService {

  private URL_BASE_API = environment.url_base_api.concat("/documento");

  constructor( private httpClient: HttpClient ) { }

  public recuperarDocumentoList() : Observable<DocumentoModel[]> {
    return this.httpClient.get<DocumentoModel[]>(`${this.URL_BASE_API}`);
  }
  
  public cadastrarDocumento( documentoModel: DocumentoModel ) : Observable<Object> {
    return this.httpClient.post(`${this.URL_BASE_API}`, documentoModel);
  }

}
