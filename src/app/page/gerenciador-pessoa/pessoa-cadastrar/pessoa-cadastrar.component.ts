import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaDocumentoModel } from "../../../model/categoria-documento-model";
import { DocumentoModel } from "../../../model/documento-model";
import { PessoaModel } from "../../../model/pessoa-model";
import { TipoPessoaModel } from "../../../model/tipo-pessoa-model";
import { GerenciadorCategoriaDocumentoService } from "../../../service/gerenciador-categoria-documento.service";
import { GerenciadorDocumentoService } from "../../../service/gerenciador-documento.service";
import { GerenciadorPessoaService } from "../../../service/gerenciador-pessoa.service";
import { GerenciadorTipoPessoaService } from "../../../service/gerenciador-tipo-pessoa.service";
import { GerenciadorArquivoService } from "../../../service/gerenciador-arquivo.service";
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { saveAs } from "file-saver";

@Component({
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.component.html',
  styleUrls: ['./pessoa-cadastrar.component.css']
})
export class PessoaCadastrarComponent implements OnInit {

  public arquivoNome: string[] = [];

  public fileStatus = {status: "", requestType: "", percent: 0};

  public pessoaModelList: PessoaModel[];
  public tipoPessoaModelList: TipoPessoaModel[];
  public categoriaDocumentoList: CategoriaDocumentoModel[];

  public documentoModel: DocumentoModel = new DocumentoModel();
  public pessoaModel: PessoaModel = new PessoaModel();
  public tipoPessoaModel: TipoPessoaModel = new TipoPessoaModel();

  public isApresentarMensagemCadastroSucesso: boolean = false;
  public isApresentarMensagemRemocaoSucesso: boolean = false;
  public isApresentarMensagemErroCadastroDadosDuplicados: boolean = false;
  public isCampoNomePessoaInvalido: boolean = false;
  public isCampoDesabilitadoCadastro: boolean = false;

  public isHabilitarAbaDadosPessoa: boolean = true;
  public isHabilitarAbaDocumento: boolean = true;
  public isHabilitarAbaEndereco: boolean = false;
  public isHabilitarAbaTelefone: boolean = false;
  public isHabilitarAbaEmail: boolean = false;
  public isHabilitarAbaRedeSocial: boolean = false;
  public isDesabilitarBotaoCadastroPessoa: boolean = false;
  public isApresentarDatatableArquivos: boolean = false;

  public isCampoCategoriaDocumentoInvalido: boolean = false;
  public isCampoNumeroDocumentoInvalido: boolean = false;
  public isCampoDescricaoDocumentoInvalido: boolean = false;
  public isCampoOrgaoEmissorDocumentoInvalido: boolean = false;
  public isCampoDataEmissaoDocumentoInvalido: boolean = false;

  public isDesabilidarCampoCategoriaDocumento: boolean = false;

  constructor(
      private router: Router, 
      private gerenciadorPessoaService: GerenciadorPessoaService, 
      private gerenciadorTipoPessoaService: GerenciadorTipoPessoaService,
      private gerenciadorCategoriaDocumentoService: GerenciadorCategoriaDocumentoService,
      private gerenciadorDocumentoService: GerenciadorDocumentoService,
      private gerenciadorArquivoService: GerenciadorArquivoService ) { }

  ngOnInit(): void {
    this.recuperarTipoPessoa();
    this.recuperarPessoaList();
    this.definirIsntituicaoFinanceiraInicialFormulario();
    this.recuperarCategoriaDocumentoList();
  }

  cadastrarDadosPessoa() {
    if (this.validarPessoaCadastrada(this.pessoaModel)) {
      if(this.validarCamposCadastroDadosPessoa(this.pessoaModel)) {
        this.gerenciadorPessoaService.cadastrar(this.tratarDadosPessoaCadastro(this.pessoaModel)).subscribe(response => {
          this.desabilitarAlertaCadastrarDadosPessoa();
          this.configurarDocumentoCadastro(this.pessoaModel);
          this.isApresentarMensagemCadastroSucesso = true;
          this.isCampoDesabilitadoCadastro = true;
          this.isDesabilitarBotaoCadastroPessoa == true;
          this.isHabilitarAbaEndereco = true;
          this.isHabilitarAbaEmail = true;
          this.isHabilitarAbaRedeSocial = true;
          setTimeout( () => {
            this.desabilitarAlertaCadastrarDadosPessoa();
          }, 5000);
          this.recuperarPessoaList();
          console.log(response);
        }, responseError => {
          console.error(responseError);
        });
      }
    } else {
      this.isApresentarMensagemErroCadastroDadosDuplicados = true;
    }
  }

  public recuperarCategoriaDocumentoList() {
    this.gerenciadorCategoriaDocumentoService.recuperarCategoriaDocumentoList().subscribe( response => {
      this.categoriaDocumentoList = response;
    });
  }

  public cadastrarDocumentosPessoa() {
    let documentoCadastrarModel = this.documentoModel;
    console.log(documentoCadastrarModel);
    // if(this.validarCamposCadastroDocumentoPessoa(documentoCadastrarModel)) {
    //   this.gerenciadorDocumentoService.cadastrarDocumento(documentoCadastrarModel).subscribe( response => {
    //     this.isApresentarMensagemCadastroSucesso = true;
    //     setTimeout( () => {
    //       this.desabilitarAlertaCadastrarDadosPessoa();
    //     }, 5000);
    //     this.limparCamposTelaCadastroDocumentos();
    //   });
    // }
  }

  public realizarUploadArquivos(arquivoList: File[]): void {
    const arquivoFormData = new FormData();
    for(const arquivo_ of arquivoList) {
      arquivoFormData.append('arquivoList', arquivo_, arquivo_.name);
      console.log(arquivoFormData);
    }
    if(arquivoList.length > 0) {
      this.gerenciadorArquivoService.cadastrar(arquivoList).subscribe( response => {
        console.log(response);
        // this.verificarProgressoImportacaoArquivo(response);
      }, (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse.error);
        throw new Error(errorResponse.error);
      });
    }
  } 

  public realizarDownloadArquivos(arquivoNome: string): void {
    this.gerenciadorArquivoService.recuperar(arquivoNome).subscribe( response => {
      console.log(response);
      this.verificarProgressoImportacaoArquivo(response);
    }, (errorResponse: HttpErrorResponse) => {
      console.log(errorResponse);
    });
  }

  private verificarProgressoImportacaoArquivo(httpEvent: HttpEvent<string[] | Blob>): void {
    switch (httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, "Carregando Arquivos...");
        break;
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, "Carregando Arquivos...");
        break;
      case HttpEventType.ResponseHeader:
        console.log("Header", httpEvent);
        break;
      case HttpEventType.Response:
        if(httpEvent.body instanceof Array) {
          for( const nomeArquivo of httpEvent.body) {
            this.arquivoNome.unshift(nomeArquivo);
          }
        } else {
          saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!, {
            type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
        }
        break;
        default:
          console.log(httpEvent);
    }
    throw new Error("Funcionalidade com Erro...");
  }

  private updateStatus(loaded: number, total: number, requestType: string) {
    this.fileStatus.status = "progress";
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total);
  }

  private tratarDadosPessoaCadastro(pessoaModel: PessoaModel) {
    pessoaModel.isAtivo = true;
    pessoaModel.isPessoaFinanceira = true;
    return pessoaModel;
  }

  private recuperarDocumentosNaoVinculadoPessoa() {
    this.gerenciadorCategoriaDocumentoService.recuperarDocumentosNaoVinculadoPessoa(this.pessoaModel.nome).subscribe( response => {
      this.categoriaDocumentoList = response;
    });
  }

  recuperarPessoaList() {
    this.gerenciadorPessoaService.recuperarPessoaList().subscribe( response => {
      this.pessoaModelList = response;
    }, responseError => {
      console.error(responseError);
    });
  }

  public configurarDocumentoCadastro(pessoaModel: PessoaModel) {
    this.documentoModel.pessoaEntity = pessoaModel;
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

  public validarCamposCadastroDocumentoPessoa(documentoModel: DocumentoModel) {
    debugger;
    if((this.categoriaDocumentoList.length -1) == 0) {
      this.isDesabilidarCampoCategoriaDocumento = true;
    }
    if(documentoModel.categoriaDocumentoModel == null || documentoModel.categoriaDocumentoModel == undefined) {
      this.isCampoCategoriaDocumentoInvalido = true;
    } else {
      this.isCampoCategoriaDocumentoInvalido = false;
    }
    if(documentoModel.numero == null || documentoModel.numero == undefined || documentoModel.numero == "") {
      this.isCampoNumeroDocumentoInvalido = true;
    } else {
      this.isCampoNumeroDocumentoInvalido = false;
    }
    if(documentoModel.orgaoEmissor == null || documentoModel.orgaoEmissor == undefined || documentoModel.orgaoEmissor == "") {
      this.isCampoOrgaoEmissorDocumentoInvalido = true;
    } else {
      this.isCampoOrgaoEmissorDocumentoInvalido = false;
    }
    if(documentoModel.dataEmissao == null || documentoModel.dataEmissao == undefined) {
      this.isCampoDataEmissaoDocumentoInvalido = true;
    } else {
      this.isCampoDataEmissaoDocumentoInvalido = false;
    }
    if(this.isCampoNumeroDocumentoInvalido == false && 
       this.isCampoNumeroDocumentoInvalido == false &&
       this.isCampoOrgaoEmissorDocumentoInvalido == false &&
       this.isCampoDataEmissaoDocumentoInvalido == false) {
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
    throw new Error("Método ATUALIZAR PESSOA não implementado!");
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

  limparCamposTelaCadastroDocumentos() {
    this.documentoModel.codigo = null;
    this.documentoModel.complemento = null;
    this.documentoModel.numero = null;
    this.documentoModel.orgaoEmissor = null;
    this.documentoModel.dataEmissao = null;
    this.documentoModel.dataVencimento = null;
    this.documentoModel.categoriaDocumentoModel = null;
    this.documentoModel.observacao = null;
    this.recuperarDocumentosNaoVinculadoPessoa();
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
