import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceitaModel } from 'src/app/model/receita-model';
import { GerenciadorReceitaService } from 'src/app/service/gerenciador-receita.service';

@Component({
  selector: 'app-gerenciador-receita',
  templateUrl: './gerenciador-receita.component.html',
  styleUrls: ['./gerenciador-receita.component.css']
})
export class GerenciadorReceitaComponent implements OnInit {
    
  receitaModelList : ReceitaModel[];

  constructor( private gerenciadorReceitaService: GerenciadorReceitaService, private router: Router ) { }

  ngOnInit(): void {
    this.gerarGraficosMonitoramentoReceita();
    this.recuperarReceita();
  }

  recuperarReceita() {
    this.gerenciadorReceitaService.recuperarReceita().subscribe( response => {
      this.receitaModelList = response;
    });
  }

  atualizarReceita(codigo: number) {
    this.redirecionarPaginaAtualizarReceita(codigo);
  }

  removerReceita(codigo: number) {
    this.gerenciadorReceitaService.removerReceita(codigo).subscribe( response => {
      this.recuperarReceita();
    });
  }

  redirecionarPaginaAtualizarReceita(codigo: number) {
    // this.router.navigate(["atualizarReceita", codigo]);
  }

  public gerarGraficosMonitoramentoReceita() {
  //   Circles.create({
  //     id: 'circles-1',
  //     radius: 45,
  //     value: 60,
  //     maxValue: 100,
  //     width: 7,
  //     text: "50%",
  //     colors: ['#f1f1f1', '#FF9E27'],
  //     duration: 400,
  //     wrpClass: 'circles-wrp',
  //     textClass: 'circles-text',
  //     styleWrapper: true,
  //     styleText: true
  // })
  // Circles.create({
  //     id: 'circles-2',
  //     radius: 45,
  //     value: 70,
  //     maxValue: 100,
  //     width: 7,
  //     text: "40%",
  //     colors: ['#f1f1f1', '#2BB930'],
  //     duration: 400,
  //     wrpClass: 'circles-wrp',
  //     textClass: 'circles-text',
  //     styleWrapper: true,
  //     styleText: true
  // })
  // Circles.create({
  //     id: 'circles-3',
  //     radius: 45,
  //     value: 40,
  //     maxValue: 100,
  //     width: 7,
  //     text: "20%",
  //     colors: ['#f1f1f1', '#F25961'],
  //     duration: 400,
  //     wrpClass: 'circles-wrp',
  //     textClass: 'circles-text',
  //     styleWrapper: true,
  //     styleText: true
  // })
  // Circles.create({
  //     id: 'circles-4',
  //     radius: 45,
  //     value: 40,
  //     maxValue: 100,
  //     width: 7,
  //     text: "18%",
  //     colors: ['#f1f1f1', '#2BB930'],
  //     duration: 400,
  //     wrpClass: 'circles-wrp',
  //     textClass: 'circles-text',
  //     styleWrapper: true,
  //     styleText: true
  // })
  // var totalIncomeChart = document.getElementById('totalIncomeChart').getContext('2d');
  // var mytotalIncomeChart = new Chart(totalIncomeChart, {
  //     type: 'bar',
  //     data: {
  //         labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"],
  //         datasets: [{
  //             label: "Total de Receitas",
  //             backgroundColor: '#ff9e27',
  //             borderColor: 'rgb(23, 125, 255)',
  //             data: [parseFloat("12545"), 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //         }],
  //     },
  //     options: {
  //         responsive: true,
  //         maintainAspectRatio: false,
  //         legend: {
  //             display: false,
  //         },
  //         scales: {
  //             yAxes: [{
  //                 ticks: {
  //                     display: false
  //                 },
  //                 gridLines: {
  //                     drawBorder: false,
  //                     display: false
  //                 }
  //             }],
  //             xAxes: [{
  //                 gridLines: {
  //                     drawBorder: false,
  //                     display: false
  //                 }
  //             }]
  //         },
  //     }
  // });
  // $('#lineChart').sparkline([105, 103, 123, 100, 95, 105, 115], {
  //     type: 'line',
  //     height: '70',
  //     width: '100%',
  //     lineWidth: '2',
  //     lineColor: '#ffa534',
  //     fillColor: 'rgba(255, 165, 52, .14)'
  // });
  
  }

}
