import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoPessoaModel } from 'src/app/model/tipo-pessoa-model';
import { GerenciadorTipoPessoaService } from 'src/app/service/gerenciador-tipo-pessoa.service';

@Component({
  selector: 'app-categoria-tipo-pessoa-cadastrar',
  templateUrl: './categoria-tipo-pessoa-cadastrar.component.html',
  styleUrls: ['./categoria-tipo-pessoa-cadastrar.component.css']
})
export class CategoriaTipoPessoaCadastrarComponent implements OnInit {

  public tipoPessoaModel = new TipoPessoaModel();

  public isCategoriaTipoPessoaCadastradaComSucesso: boolean = false;

  constructor(
    private router: Router,
    private gerenciadorTipoPessoaService: GerenciadorTipoPessoaService
  ) { }

  ngOnInit(): void { }

  public cadastrarCategoriaTipoPessoa() {
    this.gerenciadorTipoPessoaService.cadastrarTipoPessoa(this.tipoPessoaModel).subscribe( response => {
      this.isCategoriaTipoPessoaCadastradaComSucesso = true;
      setTimeout(() => {
        this.redirecionarPaginaAnterior();
      }, 4000);
    });
  }

  public redirecionarPaginaAnterior() {
    this.router.navigate(["/gerenciador-configuracao"]);
  }

  public desabilitarMensagem() {
    this.isCategoriaTipoPessoaCadastradaComSucesso = false;
  }

}
