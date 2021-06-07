import { CategoriaDespesaModel } from "./categoria-despesa-model";

export class DocumentoModel {
    public codigo: number;
    public complemento: string;
    public numero: string;
    public orgaoEmissor: string;
    public dataEmissao: Date;
    public dataVencimento: Date;
    public pessoaEntity: any;
    public categoriaDocumentoModel: any;
    public observacao: string;

}
