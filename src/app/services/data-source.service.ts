import { Injectable } from '@angular/core';
import { Aula } from 'src/models/aula';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor() { }

  aulas: Aula[] = [
    {
      id: 1,
      titulo: "Aula 1",
      videoURL: "https://www.youtube.com/embed/owsfdh4gxyc",
      perguntas: [
        {
          id: 1,
          titulo: " Dois cientistas ingleses conseguiram sintetizar" +
            " com três palavras o Princípio Humanitário da Experimentação Animal que ficou definido como" +
            " o Principio dos 3 Rs. São elas: Replacement, Reduction e Refinement." +
            " O que Replacement (Alternativas) significa?",
          respostas: [
            {
              id: 1,
              texto: "a) Refere-se a técnicas menos invasivas",
              correto: false
            },
            {
              id: 2,
              texto: "b) Utilizar o menor número de animais possíveis",
              correto: false
            },
            {
              id: 3,
              texto: "c) Sempre que possível devemos trocar animais vivos por materiais sem sensibilidade quando possível.",
              correto: true
            },
            {
              id: 4,
              texto: "d) Alternar os animais durante a experimentação",
              correto: false
            },
            {
              id: 5,
              texto: "e) Eu não sei",
              correto: false
            },
          ]
        },
        {
          id: 2,
          titulo: "Quais das opções abaixo não fazem parte do programa de bem estar animal?",
          respostas: [
            {
              id: 1,
              texto: "a) Sempre que possível, manter o animal sozinho",
              correto: true
            },
            {
              id: 2,
              texto: "b) Deixar o animal expressar seu comportamento normal",
              correto: false
            },
            {
              id: 3,
              texto: "c) Manter dieta adequada para a espécie",
              correto: false
            },
            {
              id: 4,
              texto: "d) Manter em ambiente adequado",
              correto: false
            },
            {
              id: 5,
              texto: "e) Eu não sei",
              correto: false
            },
          ]
        }
      ]
    },

    {
      id: 2,
      titulo: "Aula 2",
      videoURL: "https://www.youtube.com/embed/Fe2mTa609jM",
      perguntas: [
        {
          id: 1,
          titulo: "Pergunta 1",
          respostas: [
            {
              id: 1,
              texto: "a) Resposta 1",
              correto: false
            },
            {
              id: 2,
              texto: "b) Resposta 2",
              correto: false
            },
            {
              id: 3,
              texto: "c) Resposta 3",
              correto: false
            },
            {
              id: 4,
              texto: "d) Resposta 4",
              correto: true
            },
            {
              id: 5,
              texto: "e) Eu não sei",
              correto: false
            },
          ]
        },
        {
          id: 2,
          titulo: "Pergunta 2",
          respostas: [
            {
              id: 1,
              texto: "a) Resposta 1",
              correto: true
            },
            {
              id: 2,
              texto: "b) Resposta 2",
              correto: false
            },
            {
              id: 3,
              texto: "c) Resposta 3",
              correto: false
            },
            {
              id: 4,
              texto: "d) Resposta 4",
              correto: false
            },
            {
              id: 5,
              texto: "e) Eu não sei",
              correto: false
            },
          ]
        }
      ]
    },

    {
      id: 3,
      titulo: "Aula 3",
      videoURL: "https://www.youtube.com/embed/c8GYnNHQWcI",
      perguntas: [
        {
          id: 1,
          titulo: "Pergunta 1",
          respostas: [
            {
              id: 1,
              texto: "a) Resposta 1",
              correto: false
            },
            {
              id: 2,
              texto: "b) Resposta 2",
              correto: false
            },
            {
              id: 3,
              texto: "c) Resposta 3",
              correto: false
            },
            {
              id: 4,
              texto: "d) Resposta 4",
              correto: true
            },
            {
              id: 5,
              texto: "e) Eu não sei",
              correto: false
            },
          ]
        },
        {
          id: 2,
          titulo: "Pergunta 2",
          respostas: [
            {
              id: 1,
              texto: "a) Resposta A",
              correto: true
            },
            {
              id: 2,
              texto: "b) Resposta B",
              correto: false
            },
            {
              id: 3,
              texto: "c) Resposta C",
              correto: false
            },
            {
              id: 4,
              texto: "d) Resposta D",
              correto: false
            },
            {
              id: 5,
              texto: "e) Eu não sei",
              correto: false
            },
          ]
        }
      ]
    }

  ];
}
