import { Component, OnInit } from '@angular/core';
import { ContratoModel } from 'src/app/model/contrato-model';
import { PessoaModel } from 'src/app/model/pessoa-model';
import { GerenciadorPessoaService } from 'src/app/service/gerenciador-pessoa.service';
import { GerenciadorContratoService } from "../../../service/gerenciador-contrato.service";
import { GerenciadorTipoContratoService } from "../../../service/gerenciador-tipo-contrato.service";
import { TipoContratoModel } from "../../../model/tipo-contrato-model";
import { Router } from '@angular/router';


@Component({
  selector: 'app-contrato-cadastrar',
  templateUrl: './contrato-cadastrar.component.html',
  styleUrls: ['./contrato-cadastrar.component.css']
})
export class ContratoCadastrarComponent implements OnInit {

  contratoModel: ContratoModel = new ContratoModel();

  pessoaJuridicaList: PessoaModel[];
  pessoaFisicaList: PessoaModel[];
  tipoContratoList: TipoContratoModel[];

  isApresentarMensagemCadastroSucesso: boolean = false;
  isApresentarMensagemErro: boolean = false;

  constructor( 
    private gerenciadorContratoService: GerenciadorContratoService, 
    private gerenciadorPessoaService: GerenciadorPessoaService, 
    private gerenciadorTipoContratoService: GerenciadorTipoContratoService,
    private router: Router ) { }

  ngOnInit(): void {
    this.recuperarPessoaJuridicaModelList();
    this.recuperarTipoContratoList();
    this.recuperarPessoaFisicaModelList();
  }

  recuperarContato() {
    this.gerenciadorContratoService.recuperarContratoList().subscribe( response => {
      console.log("CONTRATO: ", response);
    }, responseError => {
      console.error(responseError);
    });
  }

  cadastrarContrato() {
    this.gerenciadorContratoService.cadastrarContrato(this.contratoModel).subscribe( response => {
      this.isApresentarMensagemCadastroSucesso = true;
      this.limparCampos();
      setTimeout(() => {
        this.redirecionarPaginaMonitoramentoContrato();
      }, 2000);
    }, responseError => {
      this.isApresentarMensagemErro = true;
      console.error(responseError);
    });
  }

  recuperarPessoaJuridicaModelList() {
    this.gerenciadorPessoaService.recuperarPessoaJuridicaList().subscribe( response => {
      this.pessoaJuridicaList = response;
    });
  }

  recuperarTipoContratoList() {
    this.gerenciadorTipoContratoService.recuperarTipoContratoList().subscribe( response => {
      this.tipoContratoList = response;
    });
  }

  recuperarPessoaFisicaModelList() {
    this.gerenciadorPessoaService.recuperarPessoaFisicaList().subscribe( response => {
      this.pessoaFisicaList = response;
    });
  }

  desabilitarAlerta() {
    this.isApresentarMensagemCadastroSucesso = false;
    this.isApresentarMensagemErro = false;
  }

  redirecionarPaginaMonitoramentoContrato() {
    this.router.navigate(["/contrato-monitoramento"]);
  }

  limparCampos() {
    this.contratoModel.codigo = null;
    this.contratoModel.dataInicioVigencia = null;
    this.contratoModel.dataFimVigencia = null;
    this.contratoModel.isATivo = null;
    this.contratoModel.tipoContrato = null;
    this.contratoModel.pessoaContratante = null;
    this.contratoModel.pessoaContratado = null;
  }

}
