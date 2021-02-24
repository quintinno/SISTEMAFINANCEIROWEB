import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceitaModel } from 'src/app/model/receita-model';
import { GerenciadorReceitaService } from 'src/app/service/gerenciador-receita.service';

@Component({
  selector: 'app-gerenciador-receita',
  templateUrl: './gerenciador-receita.component.html',
  styleUrls: ['./gerenciador-receita.component.css']
})
export class GerenciadorReceitaComponent implements OnInit {
    
  receitaModelList : ReceitaModel[];

  constructor(
    private router: Router,
    private gerenciadorReceitaService: GerenciadorReceitaService) { }

  ngOnInit(): void {
    this.gerarGraficosMonitoramentoReceita();
    this.recuperarReceita();
  }

  recuperarReceita() {
    this.gerenciadorReceitaService.recuperarReceita().subscribe( response => {
      this.receitaModelList = response;
    });
  }

  atualizarReceita(codigo: number) {
    this.redirecionarPaginaAtualizarReceita(codigo);
  }

  removerReceita(codigo: number) {
    this.gerenciadorReceitaService.removerReceita(codigo).subscribe( response => {
      this.recuperarReceita();
    });
  }

  recuperarReceitasFixas() {
    this.gerenciadorReceitaService.recuperarReceitaFixaList().subscribe( response => {
      this.receitaModelList = response;
    });
  }

  recuperarReceitasVariaveis() {
    this.gerenciadorReceitaService.recuperarReceitaVariavelList().subscribe( response => {
      this.receitaModelList = response;
    });
  }

  redirecionarPaginaAtualizarReceita(codigo: number) {
    this.router.navigate(["receita-atualizar", codigo]);
  }

  redirecionarPaginaDetalharReceita(codigo: number) {
    this.router.navigate(["receita-detalhar", codigo]);
  }

  // TODO -- Implementar Graficos de Receitas
  public gerarGraficosMonitoramentoReceita() { }

}
