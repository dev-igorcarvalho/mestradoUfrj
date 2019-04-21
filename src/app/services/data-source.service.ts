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
      titulo: "O que é uma Infecção",
      videoURL: "https://www.youtube.com/embed/uZ_QOrD5PZ0",
      perguntas: [
        {
          id: 1,
          titulo: "Uma infecção assintomática é aquela que:" ,
          respostas: [
            {
              id: 1,
              texto: "a) Vários sintomas da infecção são visíveis",
              correto: false
            },
            {
              id: 2,
              texto: "b) Mesmo havendo infecção ele não se manifesta, não aparece",
              correto: true
            },
            {
              id: 3,
              texto: "c) A infecção não se manifesta porque a pessoa realmente não está infectada",
              correto: false
            },
            {
              id: 4,
              texto: "d) Ocorre imediatamente após o ato sexual",
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
          titulo: "Podemos citar como exemplo de microrganismos que causam infecções:",
          respostas: [
            {
              id: 1,
              texto: "a) Piolho e pulga",
              correto: false
            },
            {
              id: 2,
              texto: "b) Carrapato e vírus",
              correto: false
            },
            {
              id: 3,
              texto: "c) Pulga e bactérias",
              correto: false
            },
            {
              id: 4,
              texto: "d) Vírus e bactérias",
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
          id: 3,
          titulo: "Quando uma pessoa apresenta manifestações de determinada doença ou infecção " +
           "como febre, náuseas, dor ou vermelhidão na pele, então podemos caracterizar como uma infecção:",
          respostas: [
            {
              id: 1,
              texto: "a) Sintomática",
              correto: true
            },
            {
              id: 2,
              texto: "b) Assintomática",
              correto: false
            },
            {
              id: 3,
              texto: "c) Nada podemos dizer",
              correto: false
            },
            {
              id: 4,
              texto: "d) Assintomática e sintomática",
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
      titulo: "O que é imunidade?",
      videoURL: "https://www.youtube.com/embed/Z9rGJppzb_o",
      perguntas: [
        {
          id: 1,
          titulo: "É a capacidade que o corpo ou organismo tem de reagir à invasão " +
          "de microrganismos ou de responder a estímulos, no sentido de reparar ou " +
          "restabelecer as funções normais do corpo:",
          respostas: [
            {
              id: 1,
              texto: "a) Frio",
              correto: false
            },
            {
              id: 2,
              texto: "b) Assintomático",
              correto: false
            },
            {
              id: 3,
              texto: "c) Imunidade",
              correto: true
            },
            {
              id: 4,
              texto: "d) Dor",
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
          titulo: "O vírus do papiloma humano pode ser adquirido através do sexo desprotegido, "+
          "podendo causar o câncer de colo de útero nas mulheres. Então, se uma pessoa é vacinada "+
          "contra o HPV ela pode evitar uma futura infecção, pois, a vacina vai ajudar na:",
          respostas: [
            {
              id: 1,
              texto: "a) Disseminação da infecção",
              correto: false
            },
            {
              id: 2,
              texto: "b) Proteção contra todas as doenças",
              correto: false
            },
            {
              id: 3,
              texto: "c) Ação contra o HIV",
              correto: false
            },
            {
              id: 4,
              texto: "d) Produção de anticorpos melhorando a sua capacidade imunológica",
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
          id: 3,
          titulo: "Para a maioria das pessoas, alguns fatores como alimentação ruim, "+
          "poucas horas de sono, ingestão de bebida alcoólica em excesso e estresse, "+
          "podem contribuir para uma baixa da imunidade e, consequentemente, para uma maior oportunidade de:",
          respostas: [
            {
              id: 1,
              texto: "a) Uma melhoria da saúde",
              correto: false
            },
            {
              id: 2,
              texto: "b) Ação de agentes patogênicos",
              correto: true
            },
            {
              id: 3,
              texto: "c) Ação contra o HIV",
              correto: false
            },
            {
              id: 4,
              texto: "d) Um aumento da capacidade imunológica",
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
      titulo: "Resistência aos antibióticos",
      videoURL: "https://www.youtube.com/embed/7SH04DO3m1c",
      perguntas: [
        {
          id: 1,
          titulo: "Para combater a gonorreia, uma infecção causada pela bactéria Nesseria gonorrhoeae, "+
          "a doutora prescreveu para o tratamento o medicamento:",
          respostas: [
            {
              id: 1,
              texto: "a) Novalgina",
              correto: false
            },
            {
              id: 2,
              texto: "b) Antitérmico",
              correto: false
            },
            {
              id: 3,
              texto: "c) Antibiótico",
              correto: true
            },
            {
              id: 4,
              texto: "d) Anticoncepcional",
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
          titulo: "É um termo usado para caracterizar um grupo de microrganismos resistentes "+
          "a ação de vários antibióticos e que é responsável pelo aumento do número de casos "+
          "de morte em várias partes do mundo:",
          respostas: [
            {
              id: 1,
              texto: "a) Superbactéria",
              correto: true
            },
            {
              id: 2,
              texto: "b) Gonorreia",
              correto: false
            },
            {
              id: 3,
              texto: "c) HIV",
              correto: false
            },
            {
              id: 4,
              texto: "d) Bactéria",
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
          id: 3,
          titulo: "Se um microrganismo tem resistência ao antibiótico X, isto quer dizer que:",
          respostas: [
            {
              id: 1,
              texto: "a) O microrganismo não resiste a antibióticos",
              correto: false
            },
            {
              id: 2,
              texto: "b) Que o antibiótico X está estragado",
              correto: false
            },
            {
              id: 3,
              texto: "c) O microrganismo não pode ser eliminado com o uso dos antibióticos X",
              correto: true
            },
            {
              id: 4,
              texto: "d) O microrganismo só será morto com o uso do antibiótico X",
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
      id: 4,
      titulo: "O que é uma Infecção Sexualmente Transmissível (IST)?",
      videoURL: "https://www.youtube.com/embed/W78swUt1jX0",
      perguntas: [
        {
          id: 1,
          titulo: "São infecções sexualmente transmissíveis:",
          respostas: [
            {
              id: 1,
              texto: "a) Tuberculose, gonorreia, herpes genital",
              correto: false
            },
            {
              id: 2,
              texto: "b) Tétano, gripe, coqueluche, verminose",
              correto: false
            },
            {
              id: 3,
              texto: "c) Sífilis, gonorreia, herpes genital, gripe",
              correto: false
            },
            {
              id: 4,
              texto: "d) Sífilis, gonorreia, herpes genital, aids",
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
          titulo: "São sintomas das Infecções Sexualmente Transmissíveis:",
          respostas: [
            {
              id: 1,
              texto: "a) Cansaço, coceira no órgão genital, pouca urina, ausência de febre",
              correto: false
            },
            {
              id: 2,
              texto: "b) Corrimento, leões na palma das mãos, ferida no pênis e língua",
              correto: true
            },
            {
              id: 3,
              texto: "c) Diarreia, vômito, dor no peito, tontura, dor para urinar",
              correto: false
            },
            {
              id: 4,
              texto: "d) Dor de cabeça, dor no estômago",
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
          id: 3,
          titulo: "A sigla DST não é mais usada. Agora usamos a sigla IST. E essa troca ocorreu porque:",
          respostas: [
            {
              id: 1,
              texto: "a) A IST considera possível ter e transmitir uma infecção, mesmo sem sinais e sintomas",
              correto: true
            },
            {
              id: 2,
              texto: "b) A IST considera impossível transmitir uma infecção, se não houver sinais e sintomas",
              correto: false
            },
            {
              id: 3,
              texto: "c) Se deve acompanhar a norma culta da língua portuguesa",
              correto: false
            },
            {
              id: 4,
              texto: "d) A IST considera importante os sinais e sintomas, visíveis, da doença",
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
      id: 5,
      titulo: "Conversa familiar sobre IST",
      videoURL: "https://www.youtube.com/embed/bFWNuopSqLA",
      perguntas: [
        {
          id: 1,
          titulo: "Acabei de saber que o meu parceiro ou parceira tem uma IST. Quais medidas devo tomar?",
          respostas: [
            {
              id: 1,
              texto: "a) Tomar antibiótico (remédio)  por conta própria, pois meus colegas fazem isso",
              correto: false
            },
            {
              id: 2,
              texto: "b) Procurar orientação médica",
              correto: true
            },
            {
              id: 3,
              texto: "c) Não fazer nada, pois a infecção vai sumir em alguns dias",
              correto: false
            },
            {
              id: 4,
              texto: "d) Me afastar do(a) parceiro(a), pois assim estou protegido",
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
          titulo: "Quando não é possível estabelecer uma conversa esclarecedora com os familiares, "+
          "sobre sexo, o que devo fazer? ",
          respostas: [
            {
              id: 1,
              texto: "a) Conversar com os colegas que “pegam geral”, pois eles sabem tudo",
              correto: false
            },
            {
              id: 2,
              texto: "b) Procurar ajuda na internet, onde tudo é verdade",
              correto: false
            },
            {
              id: 3,
              texto: "c) Procurar orientação de profissional qualificado",
              correto: true
            },
            {
              id: 4,
              texto: "d) Fazer tudo de qualquer jeito, pois não há perigo em errar",
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
          id: 3,
          titulo: "Se alguém diz que tem uma vida sexual ativa, então, podemos constatar que:",
          respostas: [
            {
              id: 1,
              texto: "a) Essa pessoa não usa preservativo, pois isso inativa o apetite sexual",
              correto: false
            },
            {
              id: 2,
              texto: "b) Essa pessoa procurar orientação sexual toda semana",
              correto: false
            },
            {
              id: 3,
              texto: "c) Essa pessoa estuda e trabalha ativamente",
              correto: false
            },
            {
              id: 4,
              texto: "d) Essa pessoa pratica o sexo com regularidade",
              correto: true
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
      id: 6,
      titulo: "Estratégia de prevenção",
      videoURL: "https://www.youtube.com/embed/VXFJexxJ_CA",
      perguntas: [
        {
          id: 1,
          titulo: "Qual é o método mais eficiente para a prevenção das Infecções sexualmente transmissíveis?",
          respostas: [
            {
              id: 1,
              texto: "a) Lavar bem as partes íntimas após o ato sexual",
              correto: false
            },
            {
              id: 2,
              texto: "b) Usar preservativos (camisinha)",
              correto: true
            },
            {
              id: 3,
              texto: "c) Tomar contraceptivo antes da relação sexual",
              correto: false
            },
            {
              id: 4,
              texto: "d) Ejacular (gozar) fora",
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
          titulo: "O que é sexo seguro?",
          respostas: [
            {
              id: 1,
              texto: "a) É fazer sexo com prostitutas profissionais",
              correto: false
            },
            {
              id: 2,
              texto: "b) É ter seguro de vida, caso morra de IST",
              correto: false
            },
            {
              id: 3,
              texto: "c) É diminuir ou eliminar as chances de contrair infecções durante o sexo",
              correto: true
            },
            {
              id: 4,
              texto: "d) É quando se faz, apenas sexo oral",
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
          id: 3,
          titulo: "A prática sexual deve ocorrer com responsabilidade. Para tanto, devemos:",
          respostas: [
            {
              id: 1,
              texto: "a) Fazer uso de preservativos evitando infecções",
              correto: true
            },
            {
              id: 2,
              texto: "b) Usar antibiótico quando achar que está infectado",
              correto: false
            },
            {
              id: 3,
              texto: "c) Fazer sexo com muitos parceiros",
              correto: false
            },
            {
              id: 4,
              texto: "d) Fazer sexo oral que não exige o uso de preservativos",
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
      id: 7,
      titulo: "A Sífilis",
      videoURL: "https://www.youtube.com/embed/6rXOnkRPIg4",
      perguntas: [
        {
          id: 1,
          titulo: "O que é a sífilis congênita?",
          respostas: [
            {
              id: 1,
              texto: "a) É sífilis transmitida através da saliva durante o beijo",
              correto: false
            },
            {
              id: 2,
              texto: "b) É sífilis transmitida para os avós",
              correto: false
            },
            {
              id: 3,
              texto: "c) É sífilis transmitida para o cônjuge durante a relação sexual",
              correto: false
            },
            {
              id: 4,
              texto: "d) É sífilis transmitida da mãe para o bebê através da placenta ou durante o parto normal.",
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
          titulo: "Em relação aos sintomas clínicos, a sífilis pode ser dividida nas fases primária, "+
          "secundária, latente e terciária. Cada fase desta pode ser representada, respectivamente, "+
          "por sintomas característicos como: ",
          respostas: [
            {
              id: 1,
              texto: "a) Cranco duro, lesões nas mãos e pés, sem sintomas, tumores e cistos",
              correto: true
            },
            {
              id: 2,
              texto: "b) Cranco duro, lesões nas mãos e pés, tumores e cistos, sem sintomas",
              correto: false
            },
            {
              id: 3,
              texto: "c) Lesões nas mãos e pés, Cranco duro, sem sintomas, tumores e cistos",
              correto: true
            },
            {
              id: 4,
              texto: "d) Sem sintomas, Cranco duro, sem sintomas, tumores e cistos",
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
          id: 3,
          titulo: "A bactéria causadora da sífilis é combatida com a penicilina e sob orientação médica. "+
          "E essa bactéria, Treponema pallidum, pode estar presente:",
          respostas: [
            {
              id: 1,
              texto: "a) Superbactéria",
              correto: false
            },
            {
              id: 2,
              texto: "b) Nos fluidos corporais, sêmen e sangue de pessoa contaminada",
              correto: true
            },
            {
              id: 3,
              texto: "c) Somente nas feridas e sangue de pessoa contaminada",
              correto: false
            },
            {
              id: 4,
              texto: "d) Somente na mucosa",
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
      id: 8,
      titulo: "A Gonorreia",
      videoURL: "https://www.youtube.com/embed/R_2wnCmFmSo",
      perguntas: [
        {
          id: 1,
          titulo: "Marque a opção que contém o nome do microrganismo causador da gonorreia:",
          respostas: [
            {
              id: 1,
              texto: "a) Superbactéria",
              correto: false
            },
            {
              id: 2,
              texto: "b) Treponema pallidum",
              correto: false
            },
            {
              id: 3,
              texto: "c) Neisseria gonorrheae sífilis transmitida para o cônjuge durante a relação sexual",
              correto: true
            },
            {
              id: 4,
              texto: "d) HIV",
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
          titulo: "Apesar de não haver uma vacina contra a gonorreia, as pessoas infectadas podem ser curadas, basta:",
          respostas: [
            {
              id: 1,
              texto: "a) Usar remédios caseiros e tomar banho todos os dias",
              correto: false
            },
            {
              id: 2,
              texto: "b) Passar álcool nos locais lesionados",
              correto: false
            },
            {
              id: 3,
              texto: "c) Tentar não se estressar, pois, o estresse, causa várias doenças",
              correto: false
            },
            {
              id: 4,
              texto: "d) Procurar orientação médica e fazer o tratamento correto",
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
          id: 3,
          titulo: "São sintomas característicos da  gonorreia:",
          respostas: [
            {
              id: 1,
              texto: "a) Dor de cabeça, fome, dor ao evacuar",
              correto: false
            },
            {
              id: 2,
              texto: "b) Infecção da uretra, dor ao urinar, corrimento purulento",
              correto: true
            },
            {
              id: 3,
              texto: "c) Diarreia, dor nas articulações, medo",
              correto: false
            },
            {
              id: 4,
              texto: "d) Fadiga, mau hálito e muita sede",
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
