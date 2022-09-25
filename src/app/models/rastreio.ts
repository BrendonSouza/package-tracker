export interface Rastreio{
    objetos:Objeto[],
    quantidade: number,

}

export interface Objeto{
    codObjeto: string,
    eventos: Evento[]
}

export interface Evento{
    codigo: string,
    descricao: string,
    dtHrCriado: string,
    unidade: Unidade,
    unidadeDestino: Unidade,
}

interface Unidade{
    endereco:{
        cidade: string,
        uf: string
    },
    nome?: string
    tipo: string
}