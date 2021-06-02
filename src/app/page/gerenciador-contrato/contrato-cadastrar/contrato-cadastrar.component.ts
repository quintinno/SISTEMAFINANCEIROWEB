import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContratoModel } from 'src/app/model/contrato-model';
import { PessoaModel } from 'src/app/model/pessoa-model';
import { TipoPeriodoFinanceiroModel } from 'src/app/model/tipo-periodo-financeiro-model';
import { GerenciadorPessoaService } from 'src/app/service/gerenciador-pessoa.service';
import { TipoContratoModel } from "../../../model/tipo-contrato-model";
import { GerenciadorContratoService } from "../../../service/gerenciador-contrato.service";
import { GerenciadorTipoContratoService } from "../../../service/gerenciador-tipo-contrato.service";

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
  isApresentarMensagemPessoaVinculadaContrato: Boolean = false;

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
    debugger;
    this.gerenciadorContratoService.cadastrarContrato(this.configurarContratoModel()).subscribe( response => {
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

  configurarContratoModel() {
    var contratoModelCadastrar = Object.assign({}, this.contratoModel);
      contratoModelCadastrar.dataFimVigencia = null;
      contratoModelCadastrar.numeroMesesVigenciaContrato = 12;
      contratoModelCadastrar.isATivo = true;
    return contratoModelCadastrar;
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

  // TODO --
  public isExistePessoaContratadaVinculadaContrato() {
    this.gerenciadorContratoService.isExistePessoaContratadaVinculadaContrato(this.contratoModel.pessoaContratado.codigo).subscribe( response => {
      this.isApresentarMensagemPessoaVinculadaContrato = response;
      setTimeout(() => {
        this.desabilitarAlerta();
      }, 6000);
    });
  }

  desabilitarAlerta() {
    this.isApresentarMensagemCadastroSucesso = false;
    this.isApresentarMensagemErro = false;
    this.isApresentarMensagemPessoaVinculadaContrato = false;
  }

  redirecionarPaginaMonitoramentoContrato() {
    this.router.navigate(["/contrato-monitoramento"]);
  }

  redirecionarPaginaAnterior() {
    return window.history.back();
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
