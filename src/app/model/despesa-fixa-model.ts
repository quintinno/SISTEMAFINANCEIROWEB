import { TipoSituacaoPagamentoModel } from "./tipo-situacao-pagamento-model";

export class DespesaFixaModel {
    // codigo: number;
    // categoriaDespesa: any;
    // dayaVencimento: Date;
    // dataPagamento: Date;
    // valorPagamento: number;
    // fontePagamento: any;
    // tipoSituacaoPagamento: any;
    codigoDespesa: number;
	codigoContrato: number;
    nomeFavorecido: null;
    dataVencimento: null;
    valorParcela: null;
    situacaoPagamento: TipoSituacaoPagamentoModel;
}
