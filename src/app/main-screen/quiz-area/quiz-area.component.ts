import { element } from 'protractor';
import { Resposta } from './../../../models/resposta';
import { Component, OnInit, Input } from '@angular/core';
import { Pergunta } from 'src/models/pergunta';
import { stringify } from 'querystring';

@Component({
  selector: 'app-quiz-area',
  templateUrl: './quiz-area.component.html',
  styleUrls: ['./quiz-area.component.css']
})
export class QuizAreaComponent implements OnInit {

  @Input()
  pergunta: Pergunta;
  constructor() { }

  ngOnInit() {
  }

  quizAnswer(id: number) {
    if (this.pergunta.id === id) {
      for (let resposta of this.pergunta.respostas) {
        if (resposta.correto === false) {
          let id = String(this.pergunta.id) + String(resposta.id);
          document.getElementById(id).className ='alert alert-danger';

        } else {
          let id = String(this.pergunta.id) + String(resposta.id);
          document.getElementById(id).className ='alert alert-success';
        }
      }
    }
  }

}