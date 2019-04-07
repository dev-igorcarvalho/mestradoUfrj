import { Pergunta } from './pergunta';

export class Aula {
    id: number;
    titulo: string;
    videoURL: string;
    perguntas: Pergunta[];
  }