import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerenciador-despesa',
  templateUrl: './gerenciador-despesa.component.html',
  styleUrls: ['./gerenciador-despesa.component.css']
})
export class GerenciadorDespesaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  redirecionarPaginaCadastrarDespesaFixa() {
    this.router.navigate(["/contrato-cadastrar"]).then( () => {
      window.location.reload();
    });
  }

  redirecionarPaginaCadastrarDespesaVariavel() {
    this.router.navigate(["/despesa-cadastrar"]).then( () => {
      window.location.reload();
    });
  }

}
