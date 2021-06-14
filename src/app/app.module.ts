import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GerenciadorConfiguracaoComponent } from './page/gerenciador-configuracao/gerenciador-configuracao.component';
import { ContaBancariaAlterarComponent } from './page/gerenciador-conta-bancaria/conta-bancaria-alterar/conta-bancaria-alterar.component';
import { ContaBancariaCadastrarComponent } from './page/gerenciador-conta-bancaria/conta-bancaria-cadastrar/conta-bancaria-cadastrar.component';
import { GerenciadorContaBancariaComponent } from './page/gerenciador-conta-bancaria/gerenciador-conta-bancaria.component';
import { ContratoAtualizarComponent } from './page/gerenciador-contrato/contrato-atualizar/contrato-atualizar.component';
import { ContratoCadastrarComponent } from './page/gerenciador-contrato/contrato-cadastrar/contrato-cadastrar.component';
import { GerenciadorContratoComponent } from './page/gerenciador-contrato/gerenciador-contrato.component';
import { DespesaAlterarComponent } from './page/gerenciador-despesa/despesa-alterar/despesa-alterar.component';
import { DespesaCadastrarComponent } from './page/gerenciador-despesa/despesa-cadastrar/despesa-cadastrar.component';
import { DespesaDetalharComponent } from './page/gerenciador-despesa/despesa-detalhar/despesa-detalhar.component';
import { GerenciadorDespesaComponent } from './page/gerenciador-despesa/gerenciador-despesa.component';
import { GerenciadorEmprestimoComponent } from './page/gerenciador-emprestimo/gerenciador-emprestimo.component';
import { GerenciadorPessoaComponent } from './page/gerenciador-pessoa/gerenciador-pessoa.component';
import { PessoaAtualizarComponent } from './page/gerenciador-pessoa/pessoa-atualizar/pessoa-atualizar.component';
import { PessoaCadastrarComponent } from './page/gerenciador-pessoa/pessoa-cadastrar/pessoa-cadastrar.component';
import { PessoaListarComponent } from './page/gerenciador-pessoa/pessoa-listar/pessoa-listar.component';
import { GerenciadorReceitaComponent } from './page/gerenciador-receita/gerenciador-receita.component';
import { ReceitaAtualizarComponent } from './page/gerenciador-receita/receita-atualizar/receita-atualizar.component';
import { ReceitaCadastrarComponent } from './page/gerenciador-receita/receita-cadastrar/receita-cadastrar.component';
import { ReceitaDetalharComponent } from './page/gerenciador-receita/receita-detalhar/receita-detalhar.component';
import { ReceitaListarComponent } from './page/gerenciador-receita/receita-listar/receita-listar.component';
import { ReceitaRemoverComponent } from './page/gerenciador-receita/receita-remover/receita-remover.component';
import { LoginComponent } from './page/login/login.component';
import { MonitoramentoFinanceiroComponent } from './page/monitoramento-financeiro/monitoramento-financeiro.component';
import { FooterComponent } from './page/template/footer/footer.component';
import { HeaderComponent } from './page/template/header/header.component';
import { GerenciadorDespesaFixaComponent } from './page/gerenciador-despesa-fixa/gerenciador-despesa-fixa.component';
import { DespesaFixaCadastrarComponent } from './page/gerenciador-despesa-fixa/despesa-fixa-cadastrar/despesa-fixa-cadastrar.component';
import { GerenciadorComposicaoSalarialComponent } from './page/gerenciador-composicao-salarial/gerenciador-composicao-salarial.component';
import { ComposicaoSalarialCadastrarComponent } from './page/gerenciador-composicao-salarial/composicao-salarial-cadastrar/composicao-salarial-cadastrar.component';
import { ComposicaoSalarialAlterarComponent } from './page/gerenciador-composicao-salarial/composicao-salarial-alterar/composicao-salarial-alterar.component';
import { ComposicaoSalarialDetalharComponent } from './page/gerenciador-composicao-salarial/composicao-salarial-detalhar/composicao-salarial-detalhar.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng2OrderModule } from "ng2-order-pipe";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxMaskModule } from "ngx-mask";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MonitoramentoFinanceiroComponent,
    HeaderComponent,
    FooterComponent,
    ReceitaCadastrarComponent,
    ReceitaListarComponent,
    ReceitaAtualizarComponent,
    ReceitaRemoverComponent,
    GerenciadorReceitaComponent,
    GerenciadorPessoaComponent,
    PessoaListarComponent,
    PessoaCadastrarComponent,
    PessoaAtualizarComponent,
    GerenciadorConfiguracaoComponent,
    GerenciadorDespesaComponent,
    GerenciadorEmprestimoComponent,
    GerenciadorContratoComponent,
    GerenciadorContaBancariaComponent,
    ContratoCadastrarComponent,
    ContratoAtualizarComponent,
    ContaBancariaCadastrarComponent,
    ContaBancariaAlterarComponent,
    ReceitaDetalharComponent,
    DespesaCadastrarComponent,
    DespesaAlterarComponent,
    DespesaDetalharComponent,
    GerenciadorDespesaFixaComponent,
    DespesaFixaCadastrarComponent,
    GerenciadorComposicaoSalarialComponent,
    ComposicaoSalarialCadastrarComponent,
    ComposicaoSalarialAlterarComponent,
    ComposicaoSalarialDetalharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true, // Salva sem a mascara
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
