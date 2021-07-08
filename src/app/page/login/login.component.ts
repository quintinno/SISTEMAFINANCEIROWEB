import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioSistemaModel } from 'src/app/model/usuario-sistema-model';
import { GerenciadorAutenticacaoService } from 'src/app/service/gerenciador-autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuarioSistemaModel: UsuarioSistemaModel = new UsuarioSistemaModel();

  public isApresentaMensagemErro: boolean = false;

  constructor(
    private router: Router,
    private gerenciadorAutenticacaoService: GerenciadorAutenticacaoService
  ) { }

  ngOnInit(): void { }

  public registrarLoginUsuario() {
    this.gerenciadorAutenticacaoService.registrarLoginUsuario(this.usuarioSistemaModel).subscribe( response => {
      if(response) {
        setTimeout(() => {
          this.redirecionarPaginaMonitoramentoFinanceiro();
        }, 2000);
      } else {
        this.isApresentaMensagemErro = true;
        setTimeout(() => {
          this.isApresentaMensagemErro = false;
        }, 4000);
        this.limparCampos();
      }
    });
  }

  public redirecionarPaginaMonitoramentoFinanceiro() {
    this.router.navigate(["/monitoramento-financeiro"]);
  }

  public limparCampos() {
    this.usuarioSistemaModel.identificador = null;
    this.usuarioSistemaModel.senha = null;
  }

}
