import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorArquivoService {

  private URL_BASE_API = environment.url_base_api.concat("/arquivo");

  constructor( private httpClient: HttpClient ) { }

  public cadastrar(arquivoList: File[]) : Observable<HttpEvent<string[]>> {
    return this.httpClient.post<string[]>(`${this.URL_BASE_API}`, arquivoList, {
      reportProgress: true,
      observe: 'events'
    });
  }

  public recuperar(nomeArquivo: string) : Observable<HttpEvent<Blob>> {
    return this.httpClient.get(`${this.URL_BASE_API}/recuperar/${nomeArquivo}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }

}
