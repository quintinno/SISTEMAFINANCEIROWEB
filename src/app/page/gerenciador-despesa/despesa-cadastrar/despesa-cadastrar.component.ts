import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaModel } from 'src/app/model/pessoa-model';
import { ProdutoServicoModel } from 'src/app/model/produto-servico-model';
import { TipoPessoaModel } from 'src/app/model/tipo-pessoa-model';
import { GerenciadorContratoService } from 'src/app/service/gerenciador-contrato.service';
import { GerenciadorTipoFormaPagamentoService } from 'src/app/service/gerenciador-tipo-forma-pagamento.service';
import { GerenciadorTipoPessoaService } from 'src/app/service/gerenciador-tipo-pessoa.service';
import { CategoriaDespesaModel } from "../../../model/categoria-despesa-model";
import { DespesaModel } from "../../../model/despesa-model";
import { FormaPagamentoDespesaModel } from "../../../model/forma-pagamento-despesa-model";
import { TipoFormaPagamentoModel } from "../../../model/tipo-forma-pagamento-model";
import { GerenciadorCategoriaDespesaService } from "../../../service/gerenciador-categoria-despesa.service";
import { GerenciadorPessoaService } from "../../../service/gerenciador-pessoa.service";
import { GerenciadorDespesaService } from "../../../service/gerenciador-despesa.service";

@Component({
  selector: 'app-despesa-cadastrar',
  templateUrl: './despesa-cadastrar.component.html',
  styleUrls: ['./despesa-cadastrar.component.css']
})
export class DespesaCadastrarComponent implements OnInit {

  public despesaModel: DespesaModel = new DespesaModel();
  public produtoServicoModel: ProdutoServicoModel = new ProdutoServicoModel();
  public categoriaDespesaModel: CategoriaDespesaModel = new CategoriaDespesaModel();
  public formaPagamentoDespesaModel: FormaPagamentoDespesaModel = new FormaPagamentoDespesaModel();
  public pessoaModel: PessoaModel = new PessoaModel();

  public categoriaDespesaModelList: CategoriaDespesaModel[];
  public pessoaEstabelecimentoList: PessoaModel[];
  public pessoaFisicaModelList: PessoaModel[];
  public tipoFormaPagamentoList: TipoFormaPagamentoModel[];
  public produtoServicoModelList = new Array();
  public formaPagamentoDespesaModelList: FormaPagamentoDespesaModel[];
  public tipoPessoaModelList: TipoPessoaModel[];

  public produtoServicoMultiploList = new Array();

  public isApresentarMensagemSucesso: boolean = false;
  public isApresentarMensagemErro: boolean = false;
  public isProdutoServicoMultiplo: boolean = false;
  public isFormaPagamentoMutiplo: boolean = false;

  constructor( 
    private router: Router,
    private gerenciadorCategoriaDespesaService: GerenciadorCategoriaDespesaService,
    private gerenciadorPessoaService: GerenciadorPessoaService,
    private gerenciadorTipoFormaPagamentoService: GerenciadorTipoFormaPagamentoService,
    private gerenciadorContratoService: GerenciadorContratoService,
    private gerenciadorTipoPessoaService: GerenciadorTipoPessoaService,
    private gerenciadorDespesaService: GerenciadorDespesaService
  ) { }

  ngOnInit(): void {
    this.recuperarCategoriaDespesaList();
    this.recuperarPessoaEstabelecimento();
    this.recuperarPessoaFisicaList();
    this.recuperarTipoFormaPagamentoList();
    this.recuperarTipoPessoa();
  }

  cadastrarProdutoServico( produtoServicoModelParameter: ProdutoServicoModel ) {
    var produtoServicoModelPersistir = {
        descricao: produtoServicoModelParameter.descricao,
        valorUnitario: produtoServicoModelParameter.valorUnitario,
        quantidade: produtoServicoModelParameter.quantidade
    }
    if(this.validarProdutoServicoModel(produtoServicoModelPersistir)) {
      this.produtoServicoModelList.push(produtoServicoModelPersistir);
      this.limparCamposProdutoServico();
    }
  }

  private validarProdutoServicoModel( produtoServicoModelParameter: any ) {
    if( produtoServicoModelParameter.descricao == null ) {
      console.log("O campo DESCRICAO é obrigatório!");
      return false;
    }
    if( produtoServicoModelParameter.quantidade == null ) {
      console.log("O campo QUANTIDADE é obrigatório!");
      return false;
    }
    if( produtoServicoModelParameter.valorUnitario == null ) {
      console.log("O campo VALOR UNITARIO é obrigatório!");
      return false;
    }
    return true;
  }

  removerProdutoServico( produtoServicoModelParameter: ProdutoServicoModel ) {
    this.produtoServicoModelList.forEach( (produtoServicoModel_, index, produtoServicoModelList_) => {
      if(produtoServicoModel_ === produtoServicoModelParameter) {
        produtoServicoModelList_.splice(index, 1);
        this.produtoServicoModelList = produtoServicoModelList_;
      }
    });
  }

  cadastrarFormaPagamentoDespesa( formaPagamentoDespesModel: FormaPagamentoDespesaModel ) {
    this.formaPagamentoDespesaModelList.push(formaPagamentoDespesModel);
  }

  cadastrarPessoaEstabelecimento( pessoaModel: PessoaModel ) {
    pessoaModel.isAtivo = true;
    this.gerenciadorPessoaService.cadastrar(pessoaModel).subscribe( response => {
      this.despesaModel.pessoaEstabelecimento = response;
      this.recuperarPessoaEstabelecimentoCadastrada();
    }, responseError => {

    });
  }

  recuperarPessoaEstabelecimentoCadastrada() {
    this.gerenciadorPessoaService.recuperarPessoaList().subscribe( response => {
      this.pessoaEstabelecimentoList = response.reverse();
    });
  }

  calcularValorProdutoServico() {
    return this.produtoServicoModel.valorUnitario * this.produtoServicoModel.quantidade;
  }

  cadastrarDespesa() {
    var produtoServicoModel = {
      codigo: null,
      descricao: this.produtoServicoModel.descricao,
      valorUnitario: this.produtoServicoModel.valorUnitario,
      quantidade: this.produtoServicoModel.quantidade
    }
    var formaPagamentoModel = {
      codigo: null,
      despesaModel: this.despesaModel,
      formaPagamento: this.formaPagamentoDespesaModel.formaPagamento,
      pessoaPagamento: this.formaPagamentoDespesaModel.pessoaPagamento,
      numeroParcelamento: 1,
      valorPagamento: this.formaPagamentoDespesaModel.valorPagamento
    }
    this.despesaModel.produtoServicoList = [];
    this.despesaModel.formaPagamentoDespesaList = [];
    formaPagamentoModel.despesaModel = null;
    if( this.categoriaDespesaModel.sigla == 'DVA' ) {
        this.despesaModel.produtoServicoList.push(produtoServicoModel);
        this.despesaModel.formaPagamentoDespesaList.push(formaPagamentoModel);
        this.despesaModel.categoriaDespesa = this.categoriaDespesaModel;
        this.gerenciadorDespesaService.cadastrarDespesa(this.despesaModel).subscribe( response => {
        this.isApresentarMensagemSucesso = true;
        this.limparCamposDespesa();
      }, responseError => {
        console.error(responseError);
      });
    }
  }

  alterarValorProdutoServicoMultiplo( isProdutoServicoMultiploParameter: boolean ) {
    this.isProdutoServicoMultiplo = isProdutoServicoMultiploParameter;
  }

  alterarValorFormaPagamentoMultiplo( isFormaPagamentoMultiploParameter: boolean ) {
    this.isFormaPagamentoMutiplo = isFormaPagamentoMultiploParameter;
  }

  retornarCategoriaDespesaModel() {
    return this.categoriaDespesaModel;
  }

  recuperarCategoriaDespesaList() {
    this.gerenciadorCategoriaDespesaService.recuperarCategoriaDespesaList().subscribe( response => {
      this.categoriaDespesaModelList = response;
      this.despesaModel.categoriaDespesa = this.categoriaDespesaModelList[1].codigo;
      this.categoriaDespesaModel = this.categoriaDespesaModelList[1];
    });
  }

  recuperarPessoaEstabelecimento() {
    this.gerenciadorPessoaService.recuperarPessoaList().subscribe( response => {
      this.pessoaEstabelecimentoList = response;
    });
  }

  // TODO -- Recuperar Pessoa ou Estabelecimento de acordo com a Categoria de Despesa
  recuperarCodigoCategoriaDespesaModel( categoriaDespesaModelCodigoEvent ) {
    this.categoriaDespesaModelList.forEach( (categoriaDespesaModel_, index_) => {
      if(categoriaDespesaModelCodigoEvent == this.categoriaDespesaModelList[index_].codigo) {
        this.categoriaDespesaModel = this.categoriaDespesaModelList[index_];
      }
      if(this.categoriaDespesaModel.sigla == "DFI") {
        this.recuperarPessoaEstabelecimentoContrato();
      } else {
        this.recuperarPessoaEstabelecimento();
      }
    });
    return this.categoriaDespesaModel;
  }

  recuperarPessoaEstabelecimentoContrato() {
    this.gerenciadorContratoService.recuperarContratoList().subscribe( response => {
      this.pessoaEstabelecimentoList = [];
      response.forEach( ( pessoaEstabelecimentoModel_ ) => {
        this.pessoaEstabelecimentoList.push(pessoaEstabelecimentoModel_.pessoaContratado);
      });
    });
  }

  // TODO -- Recuperar Forma de Pagamento Disponivel por usuario
  recuperarFormaPagamentoDespesaConfiguradaUsuario( pessoaEstabelecimentoModelCodigoEvent ) {
    console.log("RECUPERAR FORMA PAGAMENTO DISPONIVEL USUARIO");
  }

  recuperarPessoaFisicaList() {
    this.gerenciadorPessoaService.recuperarPessoaFisicaList().subscribe( response => {
      this.pessoaFisicaModelList = response;
    });
  }

  recuperarTipoFormaPagamentoList() {
    this.gerenciadorTipoFormaPagamentoService.recuperarTipoFormaPagamentoList().subscribe( response => {
      this.tipoFormaPagamentoList = response;
    });
  }

  recuperarProdutoServicoMultiploList() {
    this.produtoServicoMultiploList = [
      { codigo: 0, isValor: true, descricao: "Múltiplo" },
      { codigo: 1, isValor: false, descricao: "Único" }
    ]
    return this.produtoServicoMultiploList;
  }

  recuperarTipoPessoa() {
    this.gerenciadorTipoPessoaService.recuperarTipoPessoa().subscribe( response => {
      this.tipoPessoaModelList = response;
    }, responseError => {
      console.error(responseError);
    });
  }

  redirecionarPaginaMonitoramentoDespesa() {
    this.router.navigate(["/despesa-monitoramento"]);
  }

  limparCamposProdutoServico() {
    this.produtoServicoModel.descricao = null;
    this.produtoServicoModel.quantidade = null;
    this.produtoServicoModel.valorUnitario = null;
  }

  limparCamposDespesa() {
    this.despesaModel.canalPagamento = null;
    this.despesaModel.pessoaEstabelecimento = null;
    this.despesaModel.produtoServicoList = [];
    this.despesaModel.formaPagamentoDespesaList = [];
    this.formaPagamentoDespesaModel.despesaModel = null;
    this.formaPagamentoDespesaModel.formaPagamento = null;
    this.formaPagamentoDespesaModel.numeroParcelamento = null;
    this.formaPagamentoDespesaModel.pessoaPagamento = null;
    this.formaPagamentoDespesaModel.valorPagamento = null;
    this.produtoServicoModel.descricao = null;
    this.produtoServicoModel.quantidade = null;
    this.produtoServicoModel.valorUnitario = null;
    this.despesaModel.dataVencimento = null;
    this.despesaModel.dataPagamento = null;
    this.despesaModel.valorTotal = null;
    this.despesaModel.valorDesconto = null;
    this.despesaModel.valorPagamento = null;
    this.despesaModel.observacao = null;
  }

}
