import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aula } from 'src/models/aula';
import { DataSourceService } from './../services/data-source.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit, OnChanges {

  aulas: Aula[];
  aula: Aula;
  paramId: string;
  prevId: string;
  navbarWidth = '0';


  constructor(private route: ActivatedRoute, private dataSourceService: DataSourceService, private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.aulas = this.dataSourceService.aulas;
    console.info(this.aulas);
    this.paramId = this.route.snapshot.params['id'];
    for (let aula of this.aulas) {
      if (aula.id === parseInt(this.paramId)) {
        this.aula = aula;
      }
    }
  }

  ngOnChanges() {
    this.paramId = this.route.snapshot.params['id'];
    console.log(this.paramId)
    for (let aula of this.aulas) {
      if (aula.id === parseInt(this.paramId)) {
        this.aula = aula;
      }
    }
  }

}
