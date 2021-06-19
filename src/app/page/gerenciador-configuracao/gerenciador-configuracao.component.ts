import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoContratoModel } from 'src/app/model/tipo-contrato-model';
import { TipoPessoaModel } from 'src/app/model/tipo-pessoa-model';
import { GerenciadorTipoContratoService } from 'src/app/service/gerenciador-tipo-contrato.service';
import { GerenciadorTipoPessoaService } from 'src/app/service/gerenciador-tipo-pessoa.service';

@Component({
  selector: 'app-gerenciador-configuracao',
  templateUrl: './gerenciador-configuracao.component.html',
  styleUrls: ['./gerenciador-configuracao.component.css']
})
export class GerenciadorConfiguracaoComponent implements OnInit {

  public tipoPessoaModel: TipoPessoaModel = new TipoPessoaModel;

  public tipoPessoaModelList: TipoPessoaModel[];
  public tipoContratoList: TipoContratoModel[];

  constructor(
    private router: Router,
    private gerenciadorTipoPessoaService: GerenciadorTipoPessoaService,
    private gerenciadorTipoContratoService: GerenciadorTipoContratoService,
  ) { }

  ngOnInit(): void {
    this.recuperarTipoPessoa();
    this.recuperarTipoContrato();
  }

  public recuperarTipoPessoa() {
    this.gerenciadorTipoPessoaService.recuperarTipoPessoa().subscribe( response => {
      this.tipoPessoaModelList = response;
    });
  }

  public recuperarTipoContrato() {
    this.gerenciadorTipoContratoService.recuperarTipoContratoList().subscribe(response => {
      this.tipoContratoList = response;
      console.log(this.tipoContratoList);
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

  public redirecionarPaginaCategoriaDespesaCadastrar() {
    throw new Error("Função Não Implementada!");
  }

}
