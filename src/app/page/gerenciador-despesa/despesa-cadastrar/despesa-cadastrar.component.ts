import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaModel } from 'src/app/model/pessoa-model';
import { ProdutoServicoModel } from 'src/app/model/produto-servico-model';
import { CategoriaDespesaModel } from "../../../model/categoria-despesa-model";
import { DespesaModel } from "../../../model/despesa-model";
import { GerenciadorCategoriaDespesaService } from "../../../service/gerenciador-categoria-despesa.service";
import { GerenciadorPessoaService } from "../../../service/gerenciador-pessoa.service";

@Component({
  selector: 'app-despesa-cadastrar',
  templateUrl: './despesa-cadastrar.component.html',
  styleUrls: ['./despesa-cadastrar.component.css']
})
export class DespesaCadastrarComponent implements OnInit {

  public despesaModel: DespesaModel = new DespesaModel();
  public produtoServicoModel: ProdutoServicoModel = new ProdutoServicoModel();
  public categoriaDespesaModel: CategoriaDespesaModel = new CategoriaDespesaModel();

  public categoriaDespesaModelList: CategoriaDespesaModel[];
  public pessoaEstabelecimentoList: PessoaModel[];

  public isApresentarMensagemSucesso: boolean = false;
  public isApresentarMensagemErro: boolean = false;
  public isProdutoServicoMultiplo: boolean;

  constructor( 
    private router: Router,
    private gerenciadorCategoriaDespesaService: GerenciadorCategoriaDespesaService,
    private gerenciadorPessoaService: GerenciadorPessoaService
  ) { }

  ngOnInit(): void {
    this.recuperarCategoriaDespesaList();
    this.recuperarPessoaEstabelecimento();
  }

  cadastrarDespesa() {
    console.log("Cadastrar Despesas...", this.despesaModel);
  }

  alterarValorProdutoServicoMultiplo( isProdutoServicoMultiploParameter: boolean ) {
    this.isProdutoServicoMultiplo = isProdutoServicoMultiploParameter;
    console.log(this.isProdutoServicoMultiplo);
  }

  retornarCategoriaDespesaModel() {
    console.log(this.categoriaDespesaModel);
    return this.categoriaDespesaModel;
  }

  recuperarCategoriaDespesaList() {
    this.gerenciadorCategoriaDespesaService.recuperarCategoriaDespesaList().subscribe( response => {
      this.categoriaDespesaModelList = response;
    });
  }

  recuperarPessoaEstabelecimento() {
    this.gerenciadorPessoaService.recuperarPessoaList().subscribe( response => {
      this.pessoaEstabelecimentoList = response;
    });
  }

  recuperarCategoriaDespesaModel( categoriaDespesaModel ) {
    console.log(categoriaDespesaModel);
    return categoriaDespesaModel;
  }

  redirecionarPaginaMonitoramentoDespesa() {
    this.router.navigate(["/despesa-monitoramento"]);
  }

}