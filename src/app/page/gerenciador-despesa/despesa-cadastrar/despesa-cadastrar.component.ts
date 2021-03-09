import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaModel } from 'src/app/model/pessoa-model';
import { ProdutoServicoModel } from 'src/app/model/produto-servico-model';
import { GerenciadorContratoService } from 'src/app/service/gerenciador-contrato.service';
import { GerenciadorTipoFormaPagamentoService } from 'src/app/service/gerenciador-tipo-forma-pagamento.service';
import { CategoriaDespesaModel } from "../../../model/categoria-despesa-model";
import { DespesaModel } from "../../../model/despesa-model";
import { FormaPagamentoDespesaModel } from "../../../model/forma-pagamento-despesa-model";
import { TipoFormaPagamentoModel } from "../../../model/tipo-forma-pagamento-model";
import { GerenciadorCategoriaDespesaService } from "../../../service/gerenciador-categoria-despesa.service";
import { GerenciadorPessoaService } from "../../../service/gerenciador-pessoa.service";

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

  public categoriaDespesaModelList: CategoriaDespesaModel[];
  public pessoaEstabelecimentoList: PessoaModel[];
  public pessoaFisicaModelList: PessoaModel[];
  public tipoFormaPagamentoList: TipoFormaPagamentoModel[];
  public produtoServicoModelList = new Array();
  public formaPagamentoDespesaModelList: FormaPagamentoDespesaModel[];

  public produtoServicoMultiploList = new Array();

  public isApresentarMensagemSucesso: boolean = false;
  public isApresentarMensagemErro: boolean = false;
  public isProdutoServicoMultiplo: boolean = false;

  constructor( 
    private router: Router,
    private gerenciadorCategoriaDespesaService: GerenciadorCategoriaDespesaService,
    private gerenciadorPessoaService: GerenciadorPessoaService,
    private gerenciadorTipoFormaPagamentoService: GerenciadorTipoFormaPagamentoService,
    private gerenciadorContratoService: GerenciadorContratoService
  ) { }

  ngOnInit(): void {
    this.recuperarCategoriaDespesaList();
    this.recuperarPessoaEstabelecimento();
    this.recuperarPessoaFisicaList();
    this.recuperarTipoFormaPagamentoList();
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

  calcularValorProdutoServico() {
    return this.produtoServicoModel.valorUnitario * this.produtoServicoModel.quantidade;
  }

  cadastrarDespesa() {
    console.log("Cadastrar Despesas...", this.despesaModel);
  }

  alterarValorProdutoServicoMultiplo( isProdutoServicoMultiploParameter: boolean ) {
    this.isProdutoServicoMultiplo = isProdutoServicoMultiploParameter;
    console.log("Produto ou Servico Multiplo: ", this.isProdutoServicoMultiplo);
  }

  retornarCategoriaDespesaModel() {
    console.log(this.categoriaDespesaModel);
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
      console.log(this.pessoaEstabelecimentoList);
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
      console.log(this.pessoaEstabelecimentoList);
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

  redirecionarPaginaMonitoramentoDespesa() {
    this.router.navigate(["/despesa-monitoramento"]);
  }

  limparCamposProdutoServico() {
    this.produtoServicoModel.descricao = null;
    this.produtoServicoModel.quantidade = null;
    this.produtoServicoModel.valorUnitario = null;
  }

}
