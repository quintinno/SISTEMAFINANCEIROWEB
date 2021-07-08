import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioSistemaModel } from '../model/usuario-sistema-model';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorAutenticacaoService {

  private URL_BASE_API = environment.url_base_api.concat("/usuario-sistema");

  constructor( private httpClient: HttpClient ) { }

  public registrarLoginUsuario( usuarioSistemaModel: UsuarioSistemaModel ) : Observable<UsuarioSistemaModel> {
    return this.httpClient.post<UsuarioSistemaModel>(`${this.URL_BASE_API}/autenticar`, usuarioSistemaModel);
  }

}
