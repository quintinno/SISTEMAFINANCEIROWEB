import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContratoModel } from 'src/app/model/contrato-model';
import { DespesaModel } from 'src/app/model/despesa-model';
import { GerenciadorContaBancariaService } from 'src/app/service/gerenciador-conta-bancaria.service';
import { GerenciadorContratoService } from 'src/app/service/gerenciador-contrato.service';

@Component({
  selector: 'app-despesa-fixa-cadastrar',
  templateUrl: './despesa-fixa-cadastrar.component.html',
  styleUrls: ['./despesa-fixa-cadastrar.component.css']
})
export class DespesaFixaCadastrarComponent implements OnInit {

  public contratoModel: ContratoModel = new ContratoModel();
  public despesaModel: DespesaModel = new DespesaModel();

  public contratoList = new Array;  
  public contaBancariaList = new Array;

  public contratoCodigo = null;
  public isCampoDataPagamentoInvalido = false;

  constructor(
    private router: Router,
    private gerenciadorContratoService: GerenciadorContratoService,
    private gerenciadorContaBancariaService: GerenciadorContaBancariaService
  ) { }

  ngOnInit(): void {
    this.recuperarContrato();
    this.recuperarFontePagamento();
  }

  public cadastrar() {
    console.log("Cadastrar Despesa Fixa...");
    this.validarCamposFormulario();
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

  /**
	 	  Recuperar os dados da seguinte forma:
	 	
          Banco do Brasil - Conta Corrente (0826717460)
          Banco do Brasil - Conta Salário (0826717460)
          Banco do Brasil - Conta Poupança (0826717460)
          Banco do Brasil - Cartão de Crédito (4854-6441-3151-0095)
          Banco do Brasil - Cartão de Débito (4854-6441-3151-0095)

          Banco Santader - Conta Corrente (3441010833661)
          Banco Santader - Conta Poupança (3441010833661)
          Banco Santader - Cartão de Crédito (5447-3154-3418-1741)
          Banco Santader - Cartão de Débito (5447-3154-3418-1741)

          Banco Nubank - Conta Corrente (000010)
          Banco Nubank - Cartão de Crédito (5162-9204-3768-0921)
          Banco Nubank - Cartão de Débito (5162-9204-3768-0921)

          Banco Caixa Econômica - Conta Corrente (0655013000406876)
          Banco Caixa Econômica - Cartão de Poupança (603689-0010-63446-9068)

        Retorna o model "Conta Bancaria"
	 */
  public recuperarFontePagamento() {
    this.gerenciadorContaBancariaService.recuperarContaBancariaList().subscribe((response) => {
      response.forEach((retorno) => {
        // console.log(retorno);
        console.log(retorno.pessoaInstituicaoFinanceira.nome + " (" + retorno.tipoContaBancaria.descricao + ")");
      })
      this.contaBancariaList.push(response);
    });
  }

  public validarCamposFormulario() {
    if(this.contratoModel.dataInicioVigencia == null) this.isCampoDataPagamentoInvalido = true;
  }

  public redirecionarPaginaMonitoramentoDespesa() {
      this.router.navigate(["/despesa-monitoramento"]);
  }

}
