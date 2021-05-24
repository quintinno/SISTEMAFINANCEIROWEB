import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciadorConfiguracaoComponent } from './page/gerenciador-configuracao/gerenciador-configuracao.component';
import { ContaBancariaCadastrarComponent } from './page/gerenciador-conta-bancaria/conta-bancaria-cadastrar/conta-bancaria-cadastrar.component';
import { GerenciadorContaBancariaComponent } from './page/gerenciador-conta-bancaria/gerenciador-conta-bancaria.component';
import { ContratoAtualizarComponent } from './page/gerenciador-contrato/contrato-atualizar/contrato-atualizar.component';
import { ContratoCadastrarComponent } from './page/gerenciador-contrato/contrato-cadastrar/contrato-cadastrar.component';
import { GerenciadorContratoComponent } from './page/gerenciador-contrato/gerenciador-contrato.component';
import { DespesaFixaCadastrarComponent } from './page/gerenciador-despesa-fixa/despesa-fixa-cadastrar/despesa-fixa-cadastrar.component';
import { DespesaCadastrarComponent } from './page/gerenciador-despesa/despesa-cadastrar/despesa-cadastrar.component';
import { GerenciadorDespesaComponent } from './page/gerenciador-despesa/gerenciador-despesa.component';
import { GerenciadorEmprestimoComponent } from './page/gerenciador-emprestimo/gerenciador-emprestimo.component';
import { GerenciadorPessoaComponent } from './page/gerenciador-pessoa/gerenciador-pessoa.component';
import { PessoaCadastrarComponent } from './page/gerenciador-pessoa/pessoa-cadastrar/pessoa-cadastrar.component';
import { GerenciadorReceitaComponent } from './page/gerenciador-receita/gerenciador-receita.component';
import { ReceitaAtualizarComponent } from './page/gerenciador-receita/receita-atualizar/receita-atualizar.component';
import { ReceitaCadastrarComponent } from './page/gerenciador-receita/receita-cadastrar/receita-cadastrar.component';
import { ReceitaDetalharComponent } from './page/gerenciador-receita/receita-detalhar/receita-detalhar.component';
import { ReceitaListarComponent } from './page/gerenciador-receita/receita-listar/receita-listar.component';
import { LoginComponent } from './page/login/login.component';
import { MonitoramentoFinanceiroComponent } from './page/monitoramento-financeiro/monitoramento-financeiro.component';

// Composicao Salarial
import { GerenciadorComposicaoSalarialComponent } from './page/gerenciador-composicao-salarial/gerenciador-composicao-salarial.component';
import { ComposicaoSalarialCadastrarComponent } from './page/gerenciador-composicao-salarial/composicao-salarial-cadastrar/composicao-salarial-cadastrar.component';
import { ComposicaoSalarialDetalharComponent } from './page/gerenciador-composicao-salarial/composicao-salarial-detalhar/composicao-salarial-detalhar.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "monitoramento-financeiro", component: MonitoramentoFinanceiroComponent },
  { path: "pessoa-monitoramento", component: GerenciadorPessoaComponent },
  { path: "pessoa-cadastrar", component: PessoaCadastrarComponent },
  { path: "gerenciador-configuracao", component: GerenciadorConfiguracaoComponent },
  { path: "emprestimo-monitoramento", component: GerenciadorEmprestimoComponent },
  { path: "contrato-monitoramento", component: GerenciadorContratoComponent },
  { path: "contrato-cadastrar", component:  ContratoCadastrarComponent },
  { path: "contrato-atualizar/:codigo", component:  ContratoAtualizarComponent },
  { path: "conta-bancaria-monitoramento", component: GerenciadorContaBancariaComponent },
  { path: "conta-bancaria-cadastrar", component: ContaBancariaCadastrarComponent },
  { path: "receita-cadastrar", component: ReceitaCadastrarComponent },
  { path: "receita-listar", component: ReceitaListarComponent },
  { path: "receita-monitoramento", component: GerenciadorReceitaComponent },
  { path: "receita-atualizar/:codigo", component: ReceitaAtualizarComponent },
  { path: "receita-detalhar/:codigo", component:  ReceitaDetalharComponent },
  { path: "despesa-monitoramento", component: GerenciadorDespesaComponent },
  { path: "despesa-cadastrar", component: DespesaCadastrarComponent },
  { path: "despesa-fixa-cadastrar", component: DespesaFixaCadastrarComponent },

  // Composicao Salarial
  { path: "gerenciador-composicao-salarial", component: GerenciadorComposicaoSalarialComponent },
  { path: "composicao-salarial-cadastrar", component: ComposicaoSalarialCadastrarComponent },
  { path: "composicao-salarial-detalhar", component: ComposicaoSalarialDetalharComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
