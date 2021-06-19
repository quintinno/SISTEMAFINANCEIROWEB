import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GerenciadorTipoContratoService } from 'src/app/service/gerenciador-tipo-contrato.service';
import { TipoContratoModel } from "../../../model/tipo-contrato-model";

@Component({
  selector: 'app-tipo-contrato-cadastrar',
  templateUrl: './tipo-contrato-cadastrar.component.html',
  styleUrls: ['./tipo-contrato-cadastrar.component.css']
})
export class TipoContratoCadastrarComponent implements OnInit {

  public tipoContratoModel: TipoContratoModel = new TipoContratoModel();

  public isTipoContratoCadastradoComSucesso: Boolean = false;

  constructor(
    private router: Router,
    private gerenciadorTipoContratoService: GerenciadorTipoContratoService,
  ) { }

  ngOnInit(): void { }

  // TODO -- Implementar Validacao de Dados ao cadastrar
  public cadastrarTipoContrato() {
    this.gerenciadorTipoContratoService.cadastrarTipoContrato(this.tipoContratoModel).subscribe( response => {
      this.isTipoContratoCadastradoComSucesso = true;
      setTimeout(() => {
        this.redirecionarPaginaAnterior();
      }, 3000);
    });
  }

  public redirecionarPaginaAnterior() {
    this.router.navigate(["/gerenciador-configuracao"]);
  }

  desabilitarMensagem() {
    this.isTipoContratoCadastradoComSucesso = false;
  }

}
