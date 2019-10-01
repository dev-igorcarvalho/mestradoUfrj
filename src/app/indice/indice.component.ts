import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../services/data-source.service';
import { Aula } from 'src/models/aula';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {
 
  aulas: Aula[];

  constructor( private dataSourceService: DataSourceService ) { }


  ngOnInit() {
    this.aulas = this.dataSourceService.aulas;
  }

}
