import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaModel } from 'src/app/model/pessoa-model';
import { ProdutoServicoModel } from 'src/app/model/produto-servico-model';
import { TipoCanalPagamentoModel } from 'src/app/model/tipo-canal-pagamento-model';
import { TipoPessoaModel } from 'src/app/model/tipo-pessoa-model';
import { GerenciadorContratoService } from 'src/app/service/gerenciador-contrato.service';
import { GerenciadorTipoFormaPagamentoService } from 'src/app/service/gerenciador-tipo-forma-pagamento.service';
import { GerenciadorTipoPessoaService } from 'src/app/service/gerenciador-tipo-pessoa.service';
import { CartaoBancarioModel } from "../../../model/cartao-bancario-model";
import { CategoriaDespesaModel } from "../../../model/categoria-despesa-model";
import { DespesaModel } from "../../../model/despesa-model";
import { FontePagamentoDTO } from "../../../model/fonte-pagamento-dto";
import { FormaPagamentoDespesaDTO } from "../../../model/forma-pagamento-despesa-dto";
import { FormaPagamentoDespesaModel } from "../../../model/forma-pagamento-despesa-model";
import { ProdutoServicoOcorrenciaModel } from "../../../model/produto-servico-ocorrencia-model";
import { TipoFormaPagamentoModel } from "../../../model/tipo-forma-pagamento-model";
import { GerenciadorCartaoBancarioService } from "../../../service/gerenciador-cartao-bancario.service";
import { GerenciadorCategoriaDespesaService } from "../../../service/gerenciador-categoria-despesa.service";
import { GerenciadorContaBancariaService } from "../../../service/gerenciador-conta-bancaria.service";
import { GerenciadorDespesaService } from "../../../service/gerenciador-despesa.service";
import { GerenciadorPessoaService } from "../../../service/gerenciador-pessoa.service";
import { GerenciadorProdutoServicoService } from "../../../service/gerenciador-produto-servico.service";
import { GerenciadorTipoCanalPagamentoService } from "../../../service/gerenciador-tipo-canal-pagamento.service";

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
  public produtoServicoOcorrenciaModel: ProdutoServicoOcorrenciaModel = new ProdutoServicoOcorrenciaModel();
  public tipoCanalPagamentoModel: TipoCanalPagamentoModel = new TipoCanalPagamentoModel();
  public fontePagamentoDTO: FontePagamentoDTO = new FontePagamentoDTO();
  public cartaoBancarioModel: CartaoBancarioModel = new CartaoBancarioModel();
  public formaPagamentoDespesaDTO: FormaPagamentoDespesaDTO = new FormaPagamentoDespesaDTO();

  public categoriaDespesaModelList: CategoriaDespesaModel[];
  public pessoaEstabelecimentoList: PessoaModel[];
  public pessoaFisicaModelList: PessoaModel[];
  public tipoFormaPagamentoList: TipoFormaPagamentoModel[];
  public produtoServicoModelList = new Array();
  public produtoServicoMultiploList = new Array();
  public produtoServicoModelAutocompletarList = new Array();
  public formaPagamentoDespesaModelList = new Array();
  public tipoPessoaModelList: TipoPessoaModel[];
  public tipoCanalPagamentoList: TipoCanalPagamentoModel[];
  public fontePagamentoDTOList = new Array();
  public cartaoBancarioList = new Array();

  public isApresentarMensagemSucesso: boolean = false;
  public isApresentarMensagemErro: boolean = false;
  public isProdutoServicoMultiplo: boolean = false;
  public isFormaPagamentoMutiplo: boolean = false;

  public produtoServicoSelectList = new Array();
  public produtoServicoList = [];
  public produtoServicoCodigo: number;
  public totalProdutoServico: number = 0;
  public valorTotalPagamentoMultiplo: number = 0;
  public produtoServicoOcorrenciaQuantidadeList = new Array();

  public pesquisarProdutoServicoPorDescricao = "descricao";
  public pesquisarPessoaEstabelecimentoPorNome = "nome";

  constructor(
    private router: Router,
    private gerenciadorCategoriaDespesaService: GerenciadorCategoriaDespesaService,
    private gerenciadorPessoaService: GerenciadorPessoaService,
    private gerenciadorTipoFormaPagamentoService: GerenciadorTipoFormaPagamentoService,
    private gerenciadorContratoService: GerenciadorContratoService,
    private gerenciadorTipoPessoaService: GerenciadorTipoPessoaService,
    private gerenciadorDespesaService: GerenciadorDespesaService,
    private gerenciadorProdutoServicoService: GerenciadorProdutoServicoService,
    private gerenciadorTipoCanalPagamentoService: GerenciadorTipoCanalPagamentoService,
    private gerenciadorContaBancariaService: GerenciadorContaBancariaService,
    private gerenciadorCartaoBancarioService: GerenciadorCartaoBancarioService
  ) { }

  ngOnInit(): void {
    this.recuperarCategoriaDespesaList();
    this.recuperarPessoaEstabelecimento();
    this.recuperarPessoaFisicaList();
    this.recuperarTipoFormaPagamentoList();
    this.recuperarTipoPessoa();
    this.recuperarProdutoServicoCadastrado();
    this.gerarProdutoServicoOcorrenciaQuantidade();
    this.recuperarTipoCanalPagamento();
    this.recuperarFontePagamentoDinheiro();
  }

  gerarProdutoServicoOcorrenciaQuantidade() {
    var produtoServicoOcorrenciaQuantidade = { codigo: null, quantidade: null };
    for (let index = 1; index <= 10; index++) {
      produtoServicoOcorrenciaQuantidade = { codigo: null, quantidade: null };
      produtoServicoOcorrenciaQuantidade.codigo = index;
      produtoServicoOcorrenciaQuantidade.quantidade = index;
      this.produtoServicoOcorrenciaQuantidadeList.push(produtoServicoOcorrenciaQuantidade);
    }
    this.produtoServicoOcorrenciaModel = this.produtoServicoOcorrenciaQuantidadeList[0];
    this.produtoServicoOcorrenciaModel.quantidade = this.produtoServicoOcorrenciaQuantidadeList[0].quantidade;
  }

  gerarProdutoServicoOcorrenciaModel() {
    var produtoServicoOcorrenciaPersistir = {
      codigo: null,
      quantidade: null,
      valorUnitario: null,
      produtoServico: null,
    }
    return produtoServicoOcorrenciaPersistir;
  }

  cadastrarProdutoServico(produtoServicoModelParameter: ProdutoServicoModel) {
    var produtoServicoOcorrenciaPersistir = {
      codigo: null,
      quantidade: this.produtoServicoOcorrenciaModel.quantidade,
      valorUnitario: this.produtoServicoOcorrenciaModel.valorUnitario,
      descricao: produtoServicoModelParameter.descricao
    }
    var produtoServicoModelPersistir = {
      descricao: produtoServicoModelParameter.descricao,
    }
    if (this.validarProdutoServicoModel(produtoServicoModelPersistir)) {
      this.totalProdutoServico = (+this.totalProdutoServico) + ((+this.produtoServicoOcorrenciaModel.valorUnitario) * (this.produtoServicoOcorrenciaModel.quantidade));
      this.produtoServicoModelList.push(produtoServicoOcorrenciaPersistir);
      this.despesaModel.valorTotal = this.totalProdutoServico;
      this.despesaModel.valorPagamento = this.totalProdutoServico;
      this.limparCamposProdutoServico();
    }
  }

  cadastrarNovoProdutoServico(produtoServicoModelParameter: ProdutoServicoModel) {
    this.gerenciadorProdutoServicoService.cadastrar(produtoServicoModelParameter).subscribe(response => {
      console.log("Produto ou Serviço cadastrado com sucesso!");
    });
  }

  private validarProdutoServicoModel(produtoServicoModelParameter: any) {
    if (produtoServicoModelParameter.descricao == null) {
      console.log("O campo DESCRICAO é obrigatório!");
      return false;
    }
    if (this.produtoServicoOcorrenciaModel.quantidade == null) {
      console.log("O campo QUANTIDADE é obrigatório!");
      return false;
    }
    if (this.produtoServicoOcorrenciaModel.valorUnitario == null) {
      console.log("O campo VALOR UNITARIO é obrigatório!");
      return false;
    }
    return true;
  }

  removerProdutoServico(produtoServicoModelParameter: ProdutoServicoModel, produtoServicoOcorrenciaModelParameter: ProdutoServicoOcorrenciaModel) {
    this.produtoServicoModelList.forEach((produtoServicoModel_, index, produtoServicoModelList_) => {
      if (produtoServicoModel_ === produtoServicoModelParameter) {
        produtoServicoModelList_.splice(index, 1);
        this.totalProdutoServico -= (produtoServicoModel_.valorUnitario * produtoServicoModel_.quantidade);
        this.produtoServicoModelList = produtoServicoModelList_;
        this.despesaModel.valorTotal = this.totalProdutoServico;
        this.despesaModel.valorPagamento = this.totalProdutoServico;
      }
    });
  }

  cadastrarFormaPagamentoMultiplaDespesa() {
    var formaPagamentoDespesaModelCadastrar = {
      codigo: null,
      despesaModel: this.despesaModel,
      tipoFormaPagamento: this.formaPagamentoDespesaModel.formaPagamento,
      pessoaPagamento: this.formaPagamentoDespesaModel.pessoaPagamento,
      numeroParcelamento: 1,
      fontePagamento: this.fontePagamentoDTO.descricao,
      valorPagamento: this.formaPagamentoDespesaModel.valorPagamento,
    }
    if(formaPagamentoDespesaModelCadastrar.valorPagamento != null) {
      this.formaPagamentoDespesaModelList.push(formaPagamentoDespesaModelCadastrar);
      this.recuperarPessoaFisicaList();
      this.recuperarTipoFormaPagamentoList();
      this.recuperarFontePagamentoDinheiro();
      this.formaPagamentoDespesaModel.valorPagamento = null;
      this.calcularValorFormaPagamentoMultipla(formaPagamentoDespesaModelCadastrar.valorPagamento);
    }
  }

  calcularValorFormaPagamentoMultipla( valorParameter: number ) {
    this.valorTotalPagamentoMultiplo = (+this.valorTotalPagamentoMultiplo) + (+valorParameter);
    return this.valorTotalPagamentoMultiplo;
  }

  // TODO -- Implementar remocao de dados da listagem de Forma de Pagamento
  removerFormaPagamentoMultiplaDespesa() { }

  cadastrarPessoaEstabelecimento(pessoaModel: PessoaModel) {
    pessoaModel.isAtivo = true;
    pessoaModel.isInstituicaoFinanceira = false;
    this.gerenciadorPessoaService.cadastrar(pessoaModel).subscribe(response => {
      this.despesaModel.pessoaEstabelecimento = response;
      this.recuperarPessoaEstabelecimentoCadastrada();
    }, responseError => {

    });
  }

  recuperarPessoaEstabelecimentoCadastrada() {
    this.gerenciadorPessoaService.recuperarPessoaList().subscribe(response => {
      this.pessoaEstabelecimentoList = response.reverse();
    });
  }

  recuperarProdutoServicoCadastrado() {
    this.gerenciadorProdutoServicoService.recuperarProdutoServicoList().subscribe(response => {
      this.produtoServicoModelAutocompletarList = response;
      this.produtoServicoSelectList = response;
    }, responseError => {
      console.error(responseError);
    });
  }

  calcularValorProdutoServico() {
    return this.produtoServicoOcorrenciaModel.valorUnitario * this.produtoServicoOcorrenciaModel.quantidade;
  }

  // TODO -- REFATORAR CODIFICACAO DE CADASTRO
  cadastrarDespesa() {
    var produtoServicoModel = {
      codigo: null,
      descricao: this.produtoServicoModel.descricao,
      valorUnitario: this.produtoServicoOcorrenciaModel.valorUnitario,
      quantidade: this.produtoServicoOcorrenciaModel.quantidade
    }
    var formaPagamentoDespesaModel = {
      codigo: null,
      despesaModel: this.despesaModel,
      formaPagamento: this.formaPagamentoDespesaModel.formaPagamento,
      pessoaPagamento: this.formaPagamentoDespesaModel.pessoaPagamento,
      numeroParcelamento: 1,
      valorPagamento: this.despesaModel.valorTotal
    }
    var pessoaModel = {
      codigo: null,
      nome: this.despesaModel.pessoaEstabelecimento,
      tipoPessoa: null,
      isAtivo: true,
      isPessoaFinanceira: true,
      isInstituicaoFinanceira: false
    }
    this.gerenciadorPessoaService.cadastrar(pessoaModel).subscribe(response => {
      this.despesaModel.pessoaEstabelecimento = response;
    });
    this.despesaModel.produtoServicoList = [];
    this.despesaModel.formaPagamentoDespesaList = [];
    formaPagamentoDespesaModel.despesaModel = null;
    formaPagamentoDespesaModel.valorPagamento = this.despesaModel.valorTotal;
    if (this.categoriaDespesaModel.sigla == 'DVA') {
      if (this.produtoServicoModelList.length > 0) {
        this.despesaModel.produtoServicoList = this.produtoServicoModelList;
      } else {
        this.despesaModel.produtoServicoList.push(produtoServicoModel);
      }
      if(this.formaPagamentoDespesaModelList.length == 0) {
        this.despesaModel.formaPagamentoDespesaList.push(formaPagamentoDespesaModel);
      } else {
        this.despesaModel.formaPagamentoDespesaList = this.formaPagamentoDespesaModelList; 
      }
      this.despesaModel.categoriaDespesa = this.categoriaDespesaModel;
      var diaAtual = new Date().getUTCDate();
      var mesAtual = new Date().getUTCMonth() + 1;
      var anoAtual = new Date().getFullYear();
      var dataAtual = `${diaAtual}` + "/" + `${mesAtual}` + "/" + `${anoAtual}`;
      this.despesaModel.dataCadastro = dataAtual;
      this.despesaModel.valorTotal = this.produtoServicoOcorrenciaModel.quantidade * this.produtoServicoOcorrenciaModel.valorUnitario;
      this.despesaModel.valorDesconto = (this.despesaModel.valorDesconto == null ? this.despesaModel.valorDesconto = 0 : this.despesaModel.valorDesconto);
      this.despesaModel.valorPagamento = this.despesaModel.valorTotal - this.despesaModel.valorDesconto;
      this.despesaModel.tipoCanalPagamento = this.tipoCanalPagamentoModel.valor;
      this.gerenciadorDespesaService.cadastrarDespesa(this.despesaModel).subscribe(response => {
        this.isApresentarMensagemSucesso = true;
        this.limparCamposDespesa();
        setTimeout(() => {
          this.redirecionarPaginaMonitoramentoDespesa();
        }, 2000);
      }, responseError => {
        console.error(responseError);
      });
    }
  }

  // TODO
  cadastroProdutoServico() {
    this.gerenciadorProdutoServicoService.cadastrar(this.produtoServicoModel).subscribe( response => {
      console.log("Produto Cadastrado com Sucesso!");
      this.recuperarProdutoServicoCadastrado();
    });
  }

  alterarValorProdutoServicoMultiplo(isProdutoServicoMultiploParameter: boolean) {
    this.isProdutoServicoMultiplo = isProdutoServicoMultiploParameter;
  }

  alterarValorFormaPagamentoMultiplo(isFormaPagamentoMultiploParameter: boolean) {
    this.isFormaPagamentoMutiplo = isFormaPagamentoMultiploParameter;
  }

  retornarCategoriaDespesaModel() {
    return this.categoriaDespesaModel;
  }

  recuperarCategoriaDespesaList() {
    this.gerenciadorCategoriaDespesaService.recuperarCategoriaDespesaList().subscribe(response => {
      this.categoriaDespesaModelList = response;
      this.despesaModel.categoriaDespesa = this.categoriaDespesaModelList[1].codigo;
      this.categoriaDespesaModel = this.categoriaDespesaModelList[1];
    });
  }

  recuperarPessoaEstabelecimento() {
    this.gerenciadorPessoaService.recuperarPessoaList().subscribe(response => {
      this.pessoaEstabelecimentoList = response;
    });
  }

  recuperarCodigoCategoriaDespesaModel(categoriaDespesaModelCodigoEvent) {
    this.categoriaDespesaModelList.forEach((categoriaDespesaModel_, index_) => {
      if (categoriaDespesaModelCodigoEvent == this.categoriaDespesaModelList[index_].codigo) {
        this.categoriaDespesaModel = this.categoriaDespesaModelList[index_];
      }
      if (this.categoriaDespesaModel.sigla == "DFI") {
        this.recuperarPessoaEstabelecimentoContrato();
      } else {
        this.recuperarPessoaEstabelecimento();
      }
    });
    return this.categoriaDespesaModel;
  }

  recuperarPessoaEstabelecimentoContrato() {
    this.gerenciadorContratoService.recuperarContratoList().subscribe(response => {
      this.pessoaEstabelecimentoList = [];
      response.forEach((pessoaEstabelecimentoModel_) => {
        this.pessoaEstabelecimentoList.push(pessoaEstabelecimentoModel_.pessoaContratado);
      });
    });
  }

  recuperarFormaPagamentoDespesaConfiguradaUsuario(formaPagamentoSelecionadoEvent) {
    if (formaPagamentoSelecionadoEvent.sigla == "DN") {
      this.recuperarFontePagamentoDinheiro();
    }
    if (formaPagamentoSelecionadoEvent.sigla == "CC") {
      this.recuperarFontePagamentoCartaoCredito();
    }
    if (formaPagamentoSelecionadoEvent.sigla == "CD") {
      this.recuperarFontePagamentoCartaoDebito();
    }
    if(formaPagamentoSelecionadoEvent.sigla == "VA") {
      this.recuperarFontePagamentoCartaoAlimentacao();
    }
  }

  private recuperarFontePagamentoDinheiro() {
    this.fontePagamentoDTOList = new Array();
    this.fontePagamentoDTO.codigo = null;
    this.fontePagamentoDTO.descricao = null;
    this.gerenciadorContaBancariaService.recuperarContaBancariaList().subscribe(response => {
      response.forEach((contaBancariaResultado) => {
        if (contaBancariaResultado.tipoContaBancaria.descricao == "Conta Carteira (Conta Especial)") {
          this.fontePagamentoDTO.codigo = contaBancariaResultado.tipoContaBancaria.codigo;
          this.fontePagamentoDTO.descricao = contaBancariaResultado.tipoContaBancaria.descricao;
          this.fontePagamentoDTOList.push(this.fontePagamentoDTO);
        }
      });
    });
  }

  private recuperarFontePagamentoCartaoCredito() {
    this.fontePagamentoDTOList = new Array();
    this.fontePagamentoDTO.codigo = null;
    this.fontePagamentoDTO.descricao = null;
    this.gerenciadorCartaoBancarioService.recuperarCartaoBancarioCreditoList().subscribe(response => {
      response.forEach((cartaoBancarioModel_) => {
        this.fontePagamentoDTO.codigo = cartaoBancarioModel_.codigoCartaoBancario;
        this.fontePagamentoDTO.descricao = cartaoBancarioModel_.nomeInstiticaoFinanceira + " - Cartão de " + cartaoBancarioModel_.funcaoCartaoBancario + " (" + cartaoBancarioModel_.numeroCartaoBancario + ")";
        this.fontePagamentoDTOList.push(this.fontePagamentoDTO);
      });
    });
  }

  private recuperarFontePagamentoCartaoDebito() {
    this.fontePagamentoDTOList = new Array();
    this.fontePagamentoDTO.codigo = null;
    this.fontePagamentoDTO.descricao = null;
    this.gerenciadorCartaoBancarioService.recuperarCartaoBancarioDebitoList().subscribe(response => {
      response.forEach((cartaoBancarioModel_) => {
        this.fontePagamentoDTO.codigo = cartaoBancarioModel_.codigoCartaoBancario;
        this.fontePagamentoDTO.descricao = cartaoBancarioModel_.nomeInstiticaoFinanceira + " - Cartão de " + cartaoBancarioModel_.funcaoCartaoBancario + " (" + cartaoBancarioModel_.numeroCartaoBancario + ")";
        this.fontePagamentoDTOList.push(this.fontePagamentoDTO);
      });
    });
  }

  private recuperarFontePagamentoCartaoAlimentacao() {
    this.fontePagamentoDTOList = new Array();
    this.fontePagamentoDTO.codigo = null;
    this.fontePagamentoDTO.descricao = null;
    this.gerenciadorCartaoBancarioService.recuperarCartaoAlimentacaoList().subscribe(response => {
      response.forEach((cartaoBancarioModel_) => {
        this.fontePagamentoDTO.codigo = cartaoBancarioModel_.codigoCartaoBancario;
        this.fontePagamentoDTO.descricao = cartaoBancarioModel_.nomeInstiticaoFinanceira + " - Cartão de " + cartaoBancarioModel_.funcaoCartaoBancario + " (" + cartaoBancarioModel_.numeroCartaoBancario + ")";
        this.fontePagamentoDTOList.push(this.fontePagamentoDTO);
      });
    });
  }

  recuperarPessoaFisicaList() {
    this.gerenciadorPessoaService.recuperarPessoaFinanceiraSistemaList().subscribe(response => {
      this.pessoaFisicaModelList = response;
      this.formaPagamentoDespesaModel.pessoaPagamento = response[0];
    });
  }

  recuperarTipoFormaPagamentoList() {
    this.gerenciadorTipoFormaPagamentoService.recuperarTipoFormaPagamentoAtivoList().subscribe(response => {
      this.tipoFormaPagamentoList = response;
      this.formaPagamentoDespesaModel.formaPagamento = response[0];
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
    this.gerenciadorTipoPessoaService.recuperarTipoPessoa().subscribe(response => {
      this.tipoPessoaModelList = response;
    }, responseError => {
      console.error(responseError);
    });
  }

  recuperarTipoCanalPagamento() {
    this.gerenciadorTipoCanalPagamentoService.recuperarTipoCanalPagamentoList().subscribe(response => {
      this.tipoCanalPagamentoList = response;
      this.despesaModel.tipoCanalPagamento = response[0];
      this.tipoCanalPagamentoModel = response[0];
    });
  }

  recuperarFormaPagamentoVinculadoResponsavelPagamento( pessoaPagamentoDespesaParameter: PessoaModel ) {
    this.gerenciadorTipoFormaPagamentoService.recuperarFormaPagamentoPessoaVinculoContaBancariaList(pessoaPagamentoDespesaParameter.codigo).subscribe(response => {
      this.tipoFormaPagamentoList = response;
    });
    console.log("Recuperar Forma Pagamento Vinculado Responsavel Pagamento ( " + pessoaPagamentoDespesaParameter.nome + ")");
  }

  atribuirValorTotalDespesa() {
    this.despesaModel.valorTotal = this.produtoServicoOcorrenciaModel.valorUnitario;
    this.despesaModel.valorPagamento = this.despesaModel.valorTotal;
  }

  atribuirValorFinalDespesa() {
    if(this.despesaModel.valorDesconto == null) {
      this.despesaModel.valorDesconto = 0.0;
      this.despesaModel.valorPagamento = this.produtoServicoOcorrenciaModel.valorUnitario;
    } else {
      this.despesaModel.valorPagamento = this.despesaModel.valorTotal - this.despesaModel.valorDesconto;
    }
  }

  redirecionarPaginaMonitoramentoDespesa() {
    this.router.navigate(["/despesa-monitoramento"]);
  }

  redirecionarPaginaDespesaCadastrar() {
    this.router.navigate(["/despesa-cadastrar"]).then(() => {
      window.location.reload();
    });
  }

  desabilitarMensagem() {
    this.isApresentarMensagemSucesso = false;
    this.isApresentarMensagemErro = false;
    this.isProdutoServicoMultiplo = false;
    this.isFormaPagamentoMutiplo = false;
  }

  limparCamposProdutoServico() {
    this.produtoServicoModel.descricao = null;
    this.produtoServicoOcorrenciaModel.valorUnitario = null;
    this.produtoServicoOcorrenciaModel.quantidade = 1;
  }

  limparCamposDespesa() {
    this.despesaModel.tipoCanalPagamento = null;
    this.despesaModel.pessoaEstabelecimento = null;
    this.despesaModel.produtoServicoList = [];
    this.despesaModel.formaPagamentoDespesaList = [];
    this.formaPagamentoDespesaModel.despesaModel = null;
    this.formaPagamentoDespesaModel.formaPagamento = null;
    this.formaPagamentoDespesaModel.numeroParcelamento = null;
    this.formaPagamentoDespesaModel.pessoaPagamento = null;
    this.formaPagamentoDespesaModel.valorPagamento = null;
    this.produtoServicoModel.descricao = null;
    this.produtoServicoOcorrenciaModel.quantidade = null;
    this.produtoServicoOcorrenciaModel.valorUnitario = null;
    this.despesaModel.dataVencimento = null;
    this.despesaModel.dataPagamento = null;
    this.despesaModel.valorTotal = null;
    this.despesaModel.valorDesconto = null;
    this.despesaModel.valorPagamento = null;
    this.despesaModel.observacao = null;
  }

}
