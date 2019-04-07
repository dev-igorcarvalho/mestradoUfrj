import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor(private router: Router) { }

  @Input()
  aulaId: number;
  @Input()
  aulasLenght: number;

  ngOnInit() {
  }

  navigate(id: number){
    this.router.navigateByUrl('aula/'+ id);
  }

}
