import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContaBancariaModel } from 'src/app/model/conta-bancaria-model';
import { ContratoModel } from 'src/app/model/contrato-model';
import { TipoContaBancariaModel } from 'src/app/model/tipo-conta-bancaria-model';
import { GerenciadorContratoService } from 'src/app/service/gerenciador-contrato.service';
import { GerenciadorContaBancariaService } from "../../../service/gerenciador-conta-bancaria.service";
import { GerenciadorTipoContaBancariaService } from "../../../service/gerenciador-tipo-conta-bancaria.service";

@Component({
  selector: 'app-conta-bancaria-cadastrar',
  templateUrl: './conta-bancaria-cadastrar.component.html',
  styleUrls: ['./conta-bancaria-cadastrar.component.css']
})
export class ContaBancariaCadastrarComponent implements OnInit {

  contratoModelList: ContratoModel[];
  tipoContaBancariaList: TipoContaBancariaModel[];
  contaBancariaModel: ContaBancariaModel = new ContaBancariaModel();
  isApresentarMensagemCadastroSucesso: boolean = false;
  isApresentarMensagemCadastroErro: boolean = false;
  
  constructor( 
    private gerenciadorTipoContaBancariaService: GerenciadorTipoContaBancariaService,
    private gerenciadorContratoService: GerenciadorContratoService,
    private gerenciadorContaBancariaService: GerenciadorContaBancariaService,
    private router: Router) { }

  ngOnInit(): void {
    this.recuperarContratoList();
    this.recuperarTipoContaBancariaList();
  }

  recuperarContratoList() {
    this.gerenciadorContratoService.recuperarContratoList().subscribe( response => {
      this.contratoModelList = response;
    });
  }

  recuperarTipoContaBancariaList() {
    this.gerenciadorTipoContaBancariaService.recuperarTipoContaBancariaList().subscribe( response => {
      this.tipoContaBancariaList = response;
    });
  }

  cadastrarContaBancaria() {
    this.gerenciadorContaBancariaService.cadastrar(this.contaBancariaModel).subscribe( response => {
      this.limparCampos();
      this.isApresentarMensagemCadastroSucesso = true;
      setTimeout(() => {
        this.redirecionarPaginaMonitoramentoContaBancaria();
      }, 2000);
    }, responseError => {
      this.isApresentarMensagemCadastroErro = true;
    });
  }

  redirecionarPaginaMonitoramentoContaBancaria() {
    this.router.navigate(["/conta-bancaria-monitoramento"]);
  }

  limparCampos() {
    this.contaBancariaModel.contrato = null;
    this.contaBancariaModel.dataAbertura = null;
    this.contaBancariaModel.numeroAgencia = null;
    this.contaBancariaModel.numeroConta = null;
    this.contaBancariaModel.tipoContaBancaria = null;
    this.contaBancariaModel.valorSaldoInicial = null;
  }

  desabilitarAlerta() {
    this.isApresentarMensagemCadastroSucesso = false;
    this.isApresentarMensagemCadastroErro = false;
  }

}
