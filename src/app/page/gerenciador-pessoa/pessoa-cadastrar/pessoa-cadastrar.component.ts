import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaModel } from "../../../model/pessoa-model";
import { TipoPessoaModel } from "../../../model/tipo-pessoa-model";
import { GerenciadorPessoaService } from "../../../service/gerenciador-pessoa.service";
import { GerenciadorTipoPessoaService } from "../../../service/gerenciador-tipo-pessoa.service";

@Component({
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.component.html',
  styleUrls: ['./pessoa-cadastrar.component.css']
})
export class PessoaCadastrarComponent implements OnInit {

  public pessoaModelList: PessoaModel[];
  
  public tipoPessoaModelList: TipoPessoaModel[];

  public pessoaModel: PessoaModel = new PessoaModel();

  public tipoPessoaModel: TipoPessoaModel = new TipoPessoaModel();

  public isApresentarMensagemCadastroSucesso: boolean = false;

  public isApresentarMensagemRemocaoSucesso: boolean = false;

  public isApresentarMensagemErroCadastroDadosDuplicados: boolean = false;

  public isCampoNomePessoaInvalido: boolean = false;
  public isCampoDesabilitadoCadastro: boolean = false;

  public isHabilitarAbaDocumento: boolean = true;
  public isHabilitarAbaEndereco: boolean = false;
  public isHabilitarAbaTelefone: boolean = false;
  public isHabilitarAbaEmail: boolean = false;
  public isHabilitarAbaRedeSocial: boolean = false;

  public isDesabilitarBotaoCadastroPessoa: boolean = false;

  constructor( 
      private router: Router, 
      private gerenciadorPessoaService: GerenciadorPessoaService, 
      private gerenciadorTipoPessoaService: GerenciadorTipoPessoaService ) { }

  ngOnInit(): void {
    this.recuperarTipoPessoa();
    this.recuperarPessoaList();
    this.definirIsntituicaoFinanceiraInicialFormulario();
  }

  cadastrarDadosPessoa() {
    if (this.validarPessoaCadastrada(this.pessoaModel)) {
      if(this.validarCamposCadastroDadosPessoa(this.pessoaModel)) {
        this.gerenciadorPessoaService.cadastrar(this.tratarDadosPessoaCadastro(this.pessoaModel)).subscribe(response => {
          this.desabilitarAlertaCadastrarDadosPessoa();
          this.isApresentarMensagemCadastroSucesso = true;
          this.isCampoDesabilitadoCadastro = true;
          debugger;
          if(this.pessoaModel.tipoPessoa.sigla == "PF") {
            this.isHabilitarAbaDocumento = true;
          }
          this.isDesabilitarBotaoCadastroPessoa == true;
          this.isHabilitarAbaEndereco = true;
          this.isHabilitarAbaEmail = true;
          this.isHabilitarAbaRedeSocial = true;
          setTimeout( () => {
            this.desabilitarAlertaCadastrarDadosPessoa();
          }, 5000);
          this.recuperarPessoaList();
        }, responseError => {
          console.error(responseError);
        });
      }
    } else {
      this.isApresentarMensagemErroCadastroDadosDuplicados = true;
    }
  }

  private tratarDadosPessoaCadastro(pessoaModel: PessoaModel) {
    pessoaModel.isAtivo = true;
    pessoaModel.isPessoaFinanceira = true;
    return pessoaModel;
  }

  recuperarPessoaList() {
    this.gerenciadorPessoaService.recuperarPessoaList().subscribe( response => {
      this.pessoaModelList = response;
    }, responseError => {
      console.error(responseError);
    });
  }

  // TODO -- Recuperar dados do endpoint
  private validarPessoaCadastrada(pessoaModel: PessoaModel) {
    return true;
  }

  public validarCamposCadastroDadosPessoa(pessoaModel: PessoaModel) {
    if(pessoaModel.nome == null || pessoaModel.nome == undefined || pessoaModel.nome == "") {
      this.isCampoNomePessoaInvalido = true;
    } else {
      this.isCampoNomePessoaInvalido = false;
    }
    if(this.isCampoNomePessoaInvalido == false) {
      return true;
    } else {
      return false;
    }
  }

  recuperarTipoPessoa() {
    this.gerenciadorTipoPessoaService.recuperarTipoPessoa().subscribe( response => {
      this.tipoPessoaModelList = response;
      this.pessoaModel.tipoPessoa = response[1];
    }, responseError => {
      console.error(responseError);
    });
  }

  recuperarTipoPessoaPorCodigo(codigo: number) {
    this.recuperarTipoPessoa();
    for( let index = 0 ; index < this.tipoPessoaModelList.length ; index++ ) {
      if(this.tipoPessoaModelList[index].codigo == codigo) {
        this.tipoPessoaModel = this.tipoPessoaModelList[index];
      }
    }
    return this.tipoPessoaModel;
  }

  definirIsntituicaoFinanceiraInicialFormulario() {
    this.pessoaModel.isInstituicaoFinanceira = false;
  }

  atualizarPessoa( codigo: number ) {
    console.log("ATUALIZAR DADOS DA PESSOA....");
  }

  removerPessoa(codigo: number) {
    this.gerenciadorPessoaService.remover(codigo).subscribe( response => {
      this.isApresentarMensagemRemocaoSucesso = true;
      this.recuperarPessoaList();
    }, responseError => {
      console.error(responseError);
    });
  }

  limparCamposTelaCadastroPessoas() {
    this.pessoaModel.nome = null;
    this.pessoaModel.tipoPessoa = null;
    this.pessoaModel.isPessoaFinanceira = null;
    this.pessoaModel.isInstituicaoFinanceira = null;
    this.recuperarTipoPessoa();
    this.definirIsntituicaoFinanceiraInicialFormulario();
  }

  desabilitarAlertaCadastrarDadosPessoa() {
    this.isApresentarMensagemCadastroSucesso = false;
    this.isApresentarMensagemRemocaoSucesso = false;
    this.isApresentarMensagemErroCadastroDadosDuplicados = false;
  }

  redirecionarPaginaGerenciadorPessoa() {
    this.router.navigate(["/receita-cadastrar"]);
  }

}
