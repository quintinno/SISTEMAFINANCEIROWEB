import { Component, OnInit } from '@angular/core';
import { PessoaModel } from 'src/app/model/pessoa-model';
import { GerenciadorPessoaService } from "src/app/service/gerenciador-pessoa.service";

@Component({
  selector: 'app-gerenciador-pessoa',
  templateUrl: './gerenciador-pessoa.component.html',
  styleUrls: ['./gerenciador-pessoa.component.css']
})
export class GerenciadorPessoaComponent implements OnInit {

  public pessoaModel: PessoaModel = new PessoaModel();

  public pessoaModelList: PessoaModel[];

  public chavePesquisa: String = "codigo";
  public isOrdenacaoReversa: Boolean = false;
  public quantidadeResultadoPagina: number = 1;

  constructor( private gerenciadorPessoaService: GerenciadorPessoaService ) { }

  ngOnInit(): void {
    this.recuperarPessoaList();
  }

  recuperarPessoaList() {
    this.gerenciadorPessoaService.recuperarPessoaList().subscribe( response => {
      this.pessoaModelList = response;
    });
  }

  pesquisar() {
    debugger;
    if(this.pessoaModel.nome == "") {
      this.ngOnInit();
    } else {
        this.pessoaModelList = this.pessoaModelList.filter( response => {
          return response.nome.toLocaleLowerCase().match(this.pessoaModel.nome.toLocaleLowerCase());
        })
    }
  }

  ordenarPorCampoSelecao( chavePesquisa ) {
    console.log(chavePesquisa);
    this.chavePesquisa = chavePesquisa;
    this.isOrdenacaoReversa = !this.isOrdenacaoReversa;
  }

}
