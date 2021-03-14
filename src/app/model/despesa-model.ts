import { FormaPagamentoDespesaModel } from "./forma-pagamento-despesa-model";
import { ProdutoServicoModel } from "./produto-servico-model";

export class DespesaModel {
    codigo: number;
    categoriaDespesa: any;
    pessoaEstabelecimento: any;
    produtoServicoList: ProdutoServicoModel[];
    formaPagamentoDespesaList: FormaPagamentoDespesaModel[];
    canalPagamento: string;
    dataVencimento: string;
    dataPagamento: string;
    valorTotal: number;
    valorDesconto: number;
    valorPagamento: number;
    observacao: string;
}