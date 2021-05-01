import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceitaModel } from 'src/app/model/receita-model';
import { GerenciadorReceitaService } from 'src/app/service/gerenciador-receita.service';

@Component({
  selector: 'app-monitoramento-financeiro',
  templateUrl: './monitoramento-financeiro.component.html',
  styleUrls: ['./monitoramento-financeiro.component.css']
})
export class MonitoramentoFinanceiroComponent implements OnInit {

  receitaModel: ReceitaModel = new ReceitaModel();
  receitaModelList : ReceitaModel[];
  totalReceitaCadastrada: number = 0.0;
  totalDespesaCadastrada: number = 0.0;
  percentualReceitaUtilizada: number = 100;
  percentualDespesaPagas: number = 0;

  constructor( private gerenciadorReceitaService: GerenciadorReceitaService, private router: Router ) { }

  ngOnInit(): void {
    this.recuperarTotalReceitas();
  }

  recuperarTotalReceitas() {
    this.gerenciadorReceitaService.recuperarReceita().subscribe( response => {
      this.receitaModelList = response;
      for( let index = 0 ; index <= response.length ; index++ ) {
        this.totalReceitaCadastrada = this.totalReceitaCadastrada + parseFloat(response[index].valorPagamento);
      }
    });
  }

  redirecionarPaginaCadastrarReceita() {
    this.router.navigate(["/receita-cadastrar"]).then( () => {
      window.location.reload();
    });
  }

  redirecionarPaginaCadastrarDespesa() {
    this.router.navigate(["/despesa-cadastrar"]).then( () => {
      window.location.reload();
    });
  }

}
