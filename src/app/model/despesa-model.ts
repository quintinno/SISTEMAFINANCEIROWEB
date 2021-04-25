import { FormaPagamentoDespesaModel } from "./forma-pagamento-despesa-model";
import { ProdutoServicoModel } from "./produto-servico-model";
import { TipoCanalPagamentoModel } from "./tipo-canal-pagamento-model";

export class DespesaModel {
    codigo: number;
    categoriaDespesa: any;
    pessoaEstabelecimento: any;
    produtoServicoList: ProdutoServicoModel[];
    formaPagamentoDespesaList: FormaPagamentoDespesaModel[];
    tipoCanalPagamento: TipoCanalPagamentoModel;
    dataVencimento: string;
    dataPagamento: string;
    dataCadastro: string;
    valorTotal: number;
    valorDesconto: number;
    valorPagamento: number;
    observacao: string;
}