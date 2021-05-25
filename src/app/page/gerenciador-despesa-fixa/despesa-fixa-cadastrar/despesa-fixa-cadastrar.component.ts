import { Component, OnInit } from '@angular/core';
import { ContratoModel } from 'src/app/model/contrato-model';
import { GerenciadorContratoService } from 'src/app/service/gerenciador-contrato.service';

@Component({
  selector: 'app-despesa-fixa-cadastrar',
  templateUrl: './despesa-fixa-cadastrar.component.html',
  styleUrls: ['./despesa-fixa-cadastrar.component.css']
})
export class DespesaFixaCadastrarComponent implements OnInit {

  public contratoList = new Array;

  public contratoModel: ContratoModel = new ContratoModel();

  public contratoCodigo = null;

  constructor(
    private gerenciadorContratoService: GerenciadorContratoService,
  ) { }

  ngOnInit(): void {
    this.recuperarContrato();
  }

  public cadastrar() {
    console.log("Cadastrar Despesa Fixa...");
  }

  public recuperarContrato() {
    this.gerenciadorContratoService.recuperarContratoList().subscribe(response => {
      response.forEach( ( resultado ) => {
        if(resultado.identificador != null && resultado.tipoContrato.codigo != 41) {
          resultado.identificador = resultado.pessoaContratado.nome + " (" + resultado.identificador + ")";
          this.contratoList.push(resultado);
        }
      });
    });
  }

  // TODO - Gerar data de vencimento de acordo com o mes corrente
  public recuperarVencimento() {
    this.contratoList.forEach( ( contratoRetorno ) => {
      if(Number(this.contratoCodigo) === contratoRetorno.codigo) {
        this.contratoModel = contratoRetorno;
        return this.contratoModel.dataInicioVigencia;
      }
    });
  }

  // TODO - Recuperar valor cadastrado no Contrato
  public recuperarValor() {

  }

}
