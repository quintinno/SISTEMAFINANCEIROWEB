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

  private ENDPOINT_CATEGORIA_DESPESA = environment.url_base_api.concat("/categoria-despesa");

  constructor( private httpClient: HttpClient, private gerenciadorService: GerenciadorService ) { }

  recuperarCategoriaDespesaList() : Observable<CategoriaDespesaModel[]> {
    return this.httpClient.get<CategoriaDespesaModel[]>(this.gerenciadorService.recuperarUrlBaseAPI().concat(`${this.ENDPOINT_CATEGORIA_DESPESA}`));
  }

}
