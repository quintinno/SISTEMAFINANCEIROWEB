import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaDespesaModel } from '../model/categoria-despesa-model';
import { GerenciadorService } from "./gerenciador.service";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorCategoriaDespesaService {

  private URL_BASE_API = environment.url_base_api.concat("/categoria-despesa");

  constructor( private httpClient: HttpClient, private gerenciadorService: GerenciadorService ) { }

  recuperarCategoriaDespesaList() : Observable<CategoriaDespesaModel[]> {
    return this.httpClient.get<CategoriaDespesaModel[]>(`${this.URL_BASE_API}`);
  }

  public cadastrar( object: CategoriaDespesaModel ) : Observable<Object> {
    return this.httpClient.post<Object>(`${this.URL_BASE_API}`, object);
  }

}
