import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';





@Component({
  selector: 'app-video-frame',
  templateUrl: './video-frame.component.html',
  styleUrls: ['./video-frame.component.css']
})
export class VideoFrameComponent implements OnInit {

  linkURL: string;

  endereco = 'https://www.youtube.com/embed/';
  @Input()
  inputURL: string;


  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.linkURL = this.endereco + this.route.snapshot.params['videoURL'];
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.linkURL = this.endereco + params['videoURL'];
    //   }
    // );

  }


  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
