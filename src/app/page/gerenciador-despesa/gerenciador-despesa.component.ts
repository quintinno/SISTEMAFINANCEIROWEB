import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DespesaFixaModel } from 'src/app/model/despesa-fixa-model';
import { DespesaModel } from 'src/app/model/despesa-model';
import { GerenciadorDespesaService } from 'src/app/service/gerenciador-despesa.service';
import { GerenciadorParcelamentoService } from 'src/app/service/gerenciador-parcelamento.service';

@Component({
  selector: 'app-gerenciador-despesa',
  templateUrl: './gerenciador-despesa.component.html',
  styleUrls: ['./gerenciador-despesa.component.css']
})
export class GerenciadorDespesaComponent implements OnInit {

  public despesaList: DespesaModel[];
  public despesaFixaList = new Array();

  public totalizadorDespesasPagasAnoFinanceiro: number;
  public totalizadorDespesasPendentesAnoFinanceiro: number;
  public totalizadorDespesasFixasMesal: number = 0;

  constructor(
    private gerenciadorDespesaService: GerenciadorDespesaService,
    private gerenciadorParcelamentoService: GerenciadorParcelamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.recuperarDespesaFixaMensalList();
    this.recuperarTotalizadorDespesasPagasAnoFinanceiro();
    this.recuperarTotalizadorDespesasPendenteAnoFinanceiro();
    this.recuperarTotalizadorDespesaFixaMensal();
  }

  public recuperarDespesaFixaMensalList() {
    this.gerenciadorDespesaService.recuperarDespesaFixaMensalList().subscribe( response => {
      this.despesaFixaList = response;
    });
  }

  public recuperarTotalizadorDespesasPagasAnoFinanceiro() {
    this.gerenciadorDespesaService.recuperarTotalDespesasPagasAnoFinanceiro().subscribe( response => {
      this.totalizadorDespesasPagasAnoFinanceiro = response;
    });
  }

  public recuperarTotalizadorDespesasPendenteAnoFinanceiro() {
    this.gerenciadorDespesaService.recuperarTotalDespesasPendentesAnoFinanceiro().subscribe( response => {
      this.totalizadorDespesasPendentesAnoFinanceiro = response;
    });
  }

  public recuperarTotalizadorDespesaFixaMensal() {
    this.gerenciadorParcelamentoService.recuperarTotalizadorParcelamentoDespesaFixaMensal().subscribe( response => {
      this.totalizadorDespesasFixasMesal = response;
    });
  }

  redirecionarPaginaCadastrarDespesaFixa() {
    this.router.navigate(["/contrato-cadastrar"]).then( () => {
      window.location.reload();
    });
  }

  redirecionarPaginaCadastrarDespesaVariavel() {
    this.router.navigate(["/despesa-cadastrar"]).then( () => {
      window.location.reload();
    });
  }

}
