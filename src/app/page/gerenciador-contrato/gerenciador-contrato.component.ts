import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContratoModel } from 'src/app/model/contrato-model';
import { GerenciadorContratoService } from 'src/app/service/gerenciador-contrato.service';

@Component({
  selector: 'app-gerenciador-contrato',
  templateUrl: './gerenciador-contrato.component.html',
  styleUrls: ['./gerenciador-contrato.component.css']
})
export class GerenciadorContratoComponent implements OnInit {

  contratoModelList: ContratoModel[];
  
  constructor( private router: Router, private gerenciadorContratoService: GerenciadorContratoService ) { }

  ngOnInit(): void {
    this.recuperarContratoList();
  }

  recuperarContratoList() {
    this.gerenciadorContratoService.recuperarContratoList().subscribe( response => {
      this.contratoModelList = response;
    });
  }

  redirecionarPaginaAtualizarContrato( codigo: number ) {
    this.router.navigate(["/contrato-atualizar", codigo]);
  }

}
