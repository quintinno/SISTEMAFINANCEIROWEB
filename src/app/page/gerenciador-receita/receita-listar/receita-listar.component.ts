import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceitaModel } from 'src/app/model/receita-model';
import { GerenciadorReceitaService } from 'src/app/service/gerenciador-receita.service';

@Component({
  selector: 'app-receita-listar',
  templateUrl: './receita-listar.component.html',
  styleUrls: ['./receita-listar.component.css']
})
export class ReceitaListarComponent implements OnInit {

  receitaModelList : ReceitaModel[];

  constructor( private gerenciadorReceitaService: GerenciadorReceitaService, private router: Router ) { }

  ngOnInit(): void {
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

  redirecionarPaginaAtualizarReceita(codigo: number) {
    this.router.navigate(["receita-atualizar", codigo]);
  }

}
