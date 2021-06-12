import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DespesaModel } from 'src/app/model/despesa-model';
import { GerenciadorDespesaService } from 'src/app/service/gerenciador-despesa.service';

@Component({
  selector: 'app-gerenciador-despesa',
  templateUrl: './gerenciador-despesa.component.html',
  styleUrls: ['./gerenciador-despesa.component.css']
})
export class GerenciadorDespesaComponent implements OnInit {

  public despesaList: DespesaModel[];

  constructor(
    private gerenciadorDespesaService: GerenciadorDespesaService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.recuperarDespesaFixaMensalList();
  }

  public recuperarDespesaFixaMensalList() {
    this.gerenciadorDespesaService.recuperarDespesaFixaMensalList().subscribe( response => {
      this.despesaList = response;
      console.log(this.despesaList);
    });
  }

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
