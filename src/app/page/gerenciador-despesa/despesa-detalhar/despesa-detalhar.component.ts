import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GerenciadorDespesaService } from 'src/app/service/gerenciador-despesa.service';

@Component({
  selector: 'app-despesa-detalhar',
  templateUrl: './despesa-detalhar.component.html',
  styleUrls: ['./despesa-detalhar.component.css']
})
export class DespesaDetalharComponent implements OnInit {

  constructor(
    private gerenciadorDespesaService: GerenciadorDespesaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void { }

  public recuperarDespesaPorCodigo() {
    console.log(this.activatedRoute.snapshot.params["codigo"]);
    // this.gerenciadorDespesaService.recuperarDespesaPorCodigo(this.activatedRoute.snapshot.params["codigo"]).subscribe( response => {
    //   console.log(response);
    // });
  }

}
