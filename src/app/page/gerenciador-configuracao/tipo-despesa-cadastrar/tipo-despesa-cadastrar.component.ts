import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GerenciadorCategoriaDespesaService } from 'src/app/service/gerenciador-categoria-despesa.service';
import { CategoriaDespesaModel } from "../../../model/categoria-despesa-model";

@Component({
  selector: 'app-tipo-despesa-cadastrar',
  templateUrl: './tipo-despesa-cadastrar.component.html',
  styleUrls: ['./tipo-despesa-cadastrar.component.css']
})
export class TipoDespesaCadastrarComponent implements OnInit {

  public categoriaDespesaModel: CategoriaDespesaModel = new CategoriaDespesaModel();

  public isCategoriaDespesaCadastradaComSucesso: boolean = false;

  constructor(
    private router: Router,
    private gerenciadorCategoriaDespesaService: GerenciadorCategoriaDespesaService
  ) { }

  ngOnInit(): void { }

  public cadastrarCategoriaDespesa() {
    this.gerenciadorCategoriaDespesaService.cadastrar(this.categoriaDespesaModel).subscribe( response => {
      this.isCategoriaDespesaCadastradaComSucesso = true;
      setTimeout(() => {
        this.redirecionarPaginaAnterior();
      }, 2000);
    });
  }

  public redirecionarPaginaAnterior() {
    this.router.navigate(["/gerenciador-configuracao"]);
  }

  public desabilitarMensagem() {
    this.isCategoriaDespesaCadastradaComSucesso = false;
  }

}
