import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class QuizManagerService {

  constructor() { }

  teste = 'string teste';

  testFunc () {
    this.teste = 'modificado';
  }
}
