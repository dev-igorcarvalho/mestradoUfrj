import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-param-test',
  templateUrl: './param-test.component.html',
  styleUrls: ['./param-test.component.css']
})
export class ParamTestComponent implements OnInit {

  param: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.param = this.route.snapshot.params['paramTest'];
  }

}
