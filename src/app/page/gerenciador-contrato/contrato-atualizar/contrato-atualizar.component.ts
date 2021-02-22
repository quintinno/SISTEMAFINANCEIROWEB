import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratoModel } from 'src/app/model/contrato-model';
import { PessoaModel } from 'src/app/model/pessoa-model';
import { TipoContratoModel } from 'src/app/model/tipo-contrato-model';
import { GerenciadorContratoService } from 'src/app/service/gerenciador-contrato.service';
import { GerenciadorPessoaService } from 'src/app/service/gerenciador-pessoa.service';
import { GerenciadorTipoContratoService } from 'src/app/service/gerenciador-tipo-contrato.service';

@Component({
  selector: 'app-contrato-atualizar',
  templateUrl: './contrato-atualizar.component.html',
  styleUrls: ['./contrato-atualizar.component.css']
})
export class ContratoAtualizarComponent implements OnInit {

  contratoModel: ContratoModel = new ContratoModel();

  pessoaJuridicaList: PessoaModel[];
  pessoaFisicaList: PessoaModel[];
  tipoContratoList: TipoContratoModel[];

  isApresentarMensagemCadastroSucesso: boolean = false;
  isApresentarMensagemErro: boolean = false;

  constructor(
    private gerenciadorContratoService: GerenciadorContratoService,
    private gerenciadorTipoContratoService: GerenciadorTipoContratoService,
    private gerenciadorPessoaService: GerenciadorPessoaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.recuperarContratoPorCodigo();
    this.recuperarPessoaJuridicaModelList();
    this.recuperarPessoaFisicaModelList();
    this.recuperarTipoContratoList();
  }

  recuperarContratoPorCodigo() {
    let codigo = this.recuperarCodigoContratoParametro();
    this.gerenciadorContratoService.recuperarContratoPorCodigo(codigo).subscribe( response => {
      this.contratoModel = response;
    });
  }

  recuperarPessoaJuridicaModelList() {
    this.gerenciadorPessoaService.recuperarPessoaJuridicaList().subscribe( response => {
      this.pessoaJuridicaList = response;
    });
  }

  recuperarTipoContratoList() {
    this.gerenciadorTipoContratoService.recuperarTipoContratoList().subscribe( response => {
      this.tipoContratoList = response;
    });
  }

  recuperarPessoaFisicaModelList() {
    this.gerenciadorPessoaService.recuperarPessoaFisicaList().subscribe( response => {
      this.pessoaFisicaList = response;
      console.log(this.pessoaFisicaList);
    });
  }

  atualizarContrato() {
    console.log(this.contratoModel, "ATUALIZAR CONTRATO....");
  }

  private recuperarCodigoContratoParametro() {
    return this.activatedRoute.snapshot.params["codigo"];
  }

  redirecionarPaginaMonitoramentoContrato() {
    this.router.navigate(["/contrato-monitoramento"]);
  }

  desabilitarAlerta() {
    this.isApresentarMensagemCadastroSucesso = false;
    this.isApresentarMensagemErro = false;
  }

}
