import { Evento } from './rastreio';
export interface RetornoDto {
    codObjeto: string,
    etapas: Etapas[],
}
export interface Etapas{
  cidade: string
  eventos: Evento[]
}