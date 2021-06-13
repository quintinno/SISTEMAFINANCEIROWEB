import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  public totalizadorDespesasPagasAnoFinanceiro: number;
  public totalizadorDespesasPendentesAnoFinanceiro: number;

  constructor(
    private gerenciadorDespesaService: GerenciadorDespesaService,
    private gerenciadorParcelamentoService: GerenciadorParcelamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.recuperarDespesaFixaMensalList();
    this.recuperarTotalizadorDespesasPagasAnoFinanceiro();
    this.recuperarTotalizadorDespesasPendenteAnoFinanceiro();
  }

  public recuperarDespesaFixaMensalList() {
    this.gerenciadorDespesaService.recuperarDespesaFixaMensalList().subscribe( response => {
      this.despesaList = response;
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
