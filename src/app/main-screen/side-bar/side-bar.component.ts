import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Aula } from 'src/models/aula';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  @Input()
  aulas: Aula[];

  @Input()
  aula: Aula;

  ngOnInit() {
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '100%';
    document.getElementById('main').style.marginLeft = '50%';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }
  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
  }
}
