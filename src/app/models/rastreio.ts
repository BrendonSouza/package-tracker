export interface Rastreio{
    objetos:Objeto[],
    quantidade: number,

}

export interface Objeto{
    codObjeto: string,
    eventos: Evento[]
}

interface Evento{
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
    tipo: string
}