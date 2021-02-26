import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoaModel } from 'src/app/model/pessoa-model';
import { TipoReceitaModel } from 'src/app/model/tipo-receita-model';
import { GerenciadorPessoaService } from 'src/app/service/gerenciador-pessoa.service';
import { ReceitaModel } from '../../../model/receita-model';
import { GerenciadorReceitaService } from '../../../service/gerenciador-receita.service';
import { GerenciadorTipoReceitaService } from '../../../service/gerenciador-tipo-receita.service';
import { GerenciadorCategoriaReceitaService } from '../../../service/gerenciador-categoria-receita.service';
import { GerenciadorTipoFormaPagamentoService } from '../../../service/gerenciador-tipo-forma-pagamento.service';
import { CategoriaReceitaModel } from 'src/app/model/categoria-receita-model';
import { TipoFormaPagamentoModel } from 'src/app/model/tipo-forma-pagamento-model';
import { GerenciadorContaBancariaService } from 'src/app/service/gerenciador-conta-bancaria.service';
import { GerenciadorTipoSituacaoPagamentoService } from 'src/app/service/gerenciador-tipo-situacao-pagamento.service';
import { ContaBancariaModel } from 'src/app/model/conta-bancaria-model';
import { TipoSituacaoPagamentoModel } from 'src/app/model/tipo-situacao-pagamento-model';
import { GerenciadorTipoPeriodoFinanceiroService } from 'src/app/service/gerenciador-tipo-periodo-financeiro.service';
import { TipoPeriodoFinanceiroModel } from 'src/app/model/tipo-periodo-financeiro-model';
import { GerenciadorParcelamentoService } from 'src/app/service/gerenciador-parcelamento.service';
import { ParcelamentoModel } from 'src/app/model/parcelamento-model';

@Component({
  selector: 'app-receita-detalhar',
  templateUrl: './receita-detalhar.component.html',
  styleUrls: ['./receita-detalhar.component.css']
})
export class ReceitaDetalharComponent implements OnInit {

  receitaModel: ReceitaModel = new ReceitaModel();
  parcelamentoModel: ParcelamentoModel = new ParcelamentoModel();

  categoriaReceitaModel: CategoriaReceitaModel[];
  tipoReceitaModelList: TipoReceitaModel[];
  responsavelPagamentoList: PessoaModel[];
  tipoFormaPagamentoList: TipoFormaPagamentoModel[];
  contaBancariaList: ContaBancariaModel[];
  tipoSituacaoPagamentoList: TipoSituacaoPagamentoModel[] = [];
  tipoPeriodoFinanceiroList: TipoPeriodoFinanceiroModel[];
  parcelamentoList: ParcelamentoModel[];

  isApresentarMensagemSucesso: boolean = false;
  isApresentarMensagemErro: boolean = false;
  isApresentarMensagemSucessoRemocaoReceita: boolean = false;
  isEsconderConteudo: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private gerenciadorReceitaService: GerenciadorReceitaService,
    private gerenciadorTipoReceitaService: GerenciadorTipoReceitaService,
    private gerenciadorPessoaService: GerenciadorPessoaService,
    private gerenciadorCategoriaReceitaService: GerenciadorCategoriaReceitaService,
    private gerenciadorTipoFormaPagamentoService: GerenciadorTipoFormaPagamentoService,
    private gerenciadorContaBancariaService: GerenciadorContaBancariaService,
    private gerenciadorTipoSituacaoPagamentoService: GerenciadorTipoSituacaoPagamentoService,
    private gerenciadorTipoPeriodoFinanceiroService: GerenciadorTipoPeriodoFinanceiroService,
    private gerenciadorParcelamentoService: GerenciadorParcelamentoService) { }

  ngOnInit(): void {
    this.recuperarTipoSituacaoPagamentoList();
    this.recuperarTipoReceita();
    this.recuperarResponsavelPagamento();
    this.recuperarCategoriaReceita();
    this.recuperarTipoFormaPagamentoList();
    this.recuperarContaBancariaList();
    this.recuperarTipoPeriodoFinanceiroList();
    this.recuperarReceitaDetalhar();
    this.recuperarParcelamentoList();
  }

  atualizarReceita() {
    debugger;
    this.gerenciadorReceitaService.cadastrarReceita(this.receitaModel).subscribe(response => {
      this.isApresentarMensagemSucesso = true;
      this.limparCampos();
      setTimeout(() => {
        this.redirecionarPaginaMonitoramentoReceita();
      }, 2000);
    }, responseError => {
      console.error(responseError);
      this.isApresentarMensagemErro = true;
    });
  }

  // TODO -- Implementar Remocao de Receitas
  removerReceita( codigo: number ) {
    console.log("Remover Receita");
    this.receitaModel = undefined;
      this.isApresentarMensagemSucessoRemocaoReceita = true;
      this.isEsconderConteudo = true;
    setTimeout(() => {
      this.redirecionarPaginaMonitoramentoReceita();
    }, 2000);
  }

  recuperarReceitaDetalhar() {
    let codigo = this.recuperarCodigoReceita();
    this.gerenciadorReceitaService.recuperarReceitaPorCodigo(codigo).subscribe( response => {
      this.receitaModel = response;
    });
  }

  registrarPagamentoParcela(parcelamentoModel: ParcelamentoModel) {
    debugger;
    this.gerenciadorParcelamentoService.registrarPagamentoParcela(this.parcelamentoModel).subscribe( response => {
      this.isApresentarMensagemSucesso = true;
    }, responseError => {
      console.error(responseError);
    });
  }

  recuperarParcelamentoSelecionado( parcelamentoModel: ParcelamentoModel ) {
    this.parcelamentoModel = parcelamentoModel;
  }

  private recuperarCodigoReceita() {
    return this.activatedRoute.snapshot.params["codigo"];
  }

  recuperarTipoReceita() {
    this.gerenciadorTipoReceitaService.recuperar().subscribe(response => {
      this.tipoReceitaModelList = response;
    });
  }

  recuperarResponsavelPagamento() {
    this.gerenciadorPessoaService.recuperarPessoaList().subscribe(response => {
      this.responsavelPagamentoList = response;
    });
  }

  recuperarCategoriaReceita() {
    return this.gerenciadorCategoriaReceitaService.recuperar().subscribe(response => {
      this.categoriaReceitaModel = response;
    });
  }

  recuperarTipoFormaPagamentoList() {
    this.gerenciadorTipoFormaPagamentoService.recuperarTipoFormaPagamentoList().subscribe(response => {
      this.tipoFormaPagamentoList = response;
    });
  }

  recuperarContaBancariaList() {
    this.gerenciadorContaBancariaService.recuperarContaBancariaList().subscribe(response => {
      this.contaBancariaList = response;
    });
  }

  recuperarTipoSituacaoPagamentoList() {
    this.gerenciadorTipoSituacaoPagamentoService.recuperarTipoSituacaoPagamentoList().subscribe(response => {
      this.tipoSituacaoPagamentoList = response;
    });
  }

  recuperarTipoPeriodoFinanceiroList() {
    this.gerenciadorTipoPeriodoFinanceiroService.recuperarTipoPeriodoFinanceiroList().subscribe(response => {
      this.tipoPeriodoFinanceiroList = response;
    });
  }

  recuperarParcelamentoList() {
    this.gerenciadorParcelamentoService.recuperarParcelamentoList().subscribe( response => {
      this.parcelamentoList = response;
    });
  }

  redirecionarPaginaMonitoramentoReceita() {
    this.router.navigate(["/receita-monitoramento"]);
  }

  redirecionarPaginaAtualizarReceita(codigo: number) {
    this.router.navigate(["receita-atualizar", codigo]);
  }
  
  limparCampos() {
    this.receitaModel.codigo = null;
    this.receitaModel.dataPrevisaoRecebimento = null;
    this.receitaModel.dataRecebimentoPagamento = null;
    this.receitaModel.valorPagamento = null;
    this.receitaModel.tipoReceita = null;
    this.receitaModel.responsavelPagamento = null;
    this.receitaModel.quantidadeParcela = null;
    this.receitaModel.tipoFormaPagamento = null;
    this.receitaModel.contaBancariaDeposito = null;
    this.receitaModel.tipoSituacaoPagamento = null;
    this.receitaModel.tipoPeriodoFinanceiro = null;
  }

}
