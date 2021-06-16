import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerenciador-configuracao',
  templateUrl: './gerenciador-configuracao.component.html',
  styleUrls: ['./gerenciador-configuracao.component.css']
})
export class GerenciadorConfiguracaoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  public redirecionarPaginaCategoriaTipoPessoaCadastrar() {
    this.router.navigate(["/configuracao-categoria-tipo-pessoa-cadastrar"]);
  }

  public redirecionarPaginaCategoriaContratoCadastrar() {
    throw new Error("Função Não Implementada!");
  }

  public redirecionarPaginaCategoriaReceitaCadastrar() {
    throw new Error("Função Não Implementada!");
  }

  public redirecionarPaginaCategoriaDespesaCadastrar() {
    throw new Error("Função Não Implementada!");
  }

}
