export class ContratoModel {
    codigo: number;
    dataInicioVigencia: Date;
    dataFimVigencia: Date;
    diaVencimentoFatura: number;
    valorMensalPagamento: number;
    tipoPeriodoFinanceiroEnumeration: any;
    numeroMesesVigenciaContrato: number;
    tipoContrato: any;
    pessoaContratante: any;
    pessoaContratado: any;
    isATivo: boolean;
}
