import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaModel } from 'src/app/model/receita-model';
import { GerenciadorReceitaService } from 'src/app/service/gerenciador-receita.service';

@Component({
  selector: 'app-receita-atualizar',
  templateUrl: './receita-atualizar.component.html',
  styleUrls: ['./receita-atualizar.component.css']
})
export class ReceitaAtualizarComponent implements OnInit {

  receitaModel: ReceitaModel = new ReceitaModel();

  isApresentarMensagem: boolean = false;

  constructor( private gerenciadorReceitaService : GerenciadorReceitaService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.recuperarReceitaPorCodigo();
  }

  atualizarReceita() {
    this.gerenciadorReceitaService.atualizarReceita(this.receitaModel.codigo, this.receitaModel).subscribe( response => {
      this.redirecionarPaginaMonitoramentoReceita();
    });
  }

  recuperarReceitaPorCodigo() {
    let id = this.recuperarReceitaCodigo();
    this.gerenciadorReceitaService.recuperarReceitaPorId(id).subscribe( response => {
      this.receitaModel = response;
    });
  }

  private recuperarReceitaCodigo() {
    return this.activatedRoute.snapshot.params["codigo"];
  }

  redirecionarPaginaMonitoramentoReceita() {
    this.router.navigate(["receita-monitoramento"]);
  }

}
