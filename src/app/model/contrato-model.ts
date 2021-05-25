export class ContratoModel {
    codigo: number;
    identificador: string;
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
