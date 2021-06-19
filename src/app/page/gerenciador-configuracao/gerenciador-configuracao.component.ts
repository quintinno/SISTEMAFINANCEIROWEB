import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoContratoModel } from 'src/app/model/tipo-contrato-model';
import { TipoPessoaModel } from 'src/app/model/tipo-pessoa-model';
import { CategoriaDespesaModel } from '../../model/categoria-despesa-model';
import { GerenciadorTipoContratoService } from 'src/app/service/gerenciador-tipo-contrato.service';
import { GerenciadorTipoPessoaService } from 'src/app/service/gerenciador-tipo-pessoa.service';
import { GerenciadorCategoriaDespesaService } from 'src/app/service/gerenciador-categoria-despesa.service';

@Component({
  selector: 'app-gerenciador-configuracao',
  templateUrl: './gerenciador-configuracao.component.html',
  styleUrls: ['./gerenciador-configuracao.component.css']
})
export class GerenciadorConfiguracaoComponent implements OnInit {

  public tipoPessoaModel: TipoPessoaModel = new TipoPessoaModel;

  public tipoPessoaModelList: TipoPessoaModel[];
  public tipoContratoList: TipoContratoModel[];
  public categoriaDespesaList: CategoriaDespesaModel[];

  constructor(
    private router: Router,
    private gerenciadorTipoPessoaService: GerenciadorTipoPessoaService,
    private gerenciadorTipoContratoService: GerenciadorTipoContratoService,
    private gerenciadorCategoriaDespesaService: GerenciadorCategoriaDespesaService,
  ) { }

  ngOnInit(): void {
    this.recuperarTipoPessoa();
    this.recuperarTipoContrato();
    this.recuperarCategoriaDespesa();
  }

  public recuperarTipoPessoa() {
    this.gerenciadorTipoPessoaService.recuperarTipoPessoa().subscribe( response => {
      this.tipoPessoaModelList = response;
    });
  }

  public recuperarTipoContrato() {
    this.gerenciadorTipoContratoService.recuperarTipoContratoList().subscribe(response => {
      this.tipoContratoList = response;
    });
  }

  public recuperarCategoriaDespesa() {
    this.gerenciadorCategoriaDespesaService.recuperarCategoriaDespesaList().subscribe(response => {
      this.categoriaDespesaList = response;
      console.log(this.categoriaDespesaList);
    });
  }

  public redirecionarPaginaCategoriaTipoPessoaCadastrar() {
    this.router.navigate(["/configuracao-categoria-tipo-pessoa-cadastrar"]);
  }

  public redirecionarPaginaTipoContratoCadastrar() {
    this.router.navigate(["/configuracao-tipo-contrato-cadastrar"]);
  }

  public redirecionarPaginaCategoriaReceitaCadastrar() {
    throw new Error("Função Não Implementada!");
  }

  public redirecionarPaginaTipoDespesaCadastrar() {
    this.router.navigate(["/configuracao-tipo-despesa-cadastrar"]);
  }

}
