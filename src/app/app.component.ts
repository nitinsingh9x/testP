import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testP';
  abc:number =1;
  programmingLang = [
    'Java'
    ,'Python'
    ,'C#'
    ,'Redy'
  ]


  card = [
    { title: 'my card tiele 1', img: 'asset/scr/abc.img', cardcontent: 'my content'},
    { title: 'my card tiele 1', img: 'asset/scr/abc.img', cardcontent: 'my content'},
    { title: 'my card tiele 1', img: 'asset/scr/abc.img', cardcontent: 'my content'},
    { title: 'my card tiele 1', img: 'asset/scr/abc.img', cardcontent: 'my content'}
  ]

  takeMyName(params:string) {
    return params; 
  }
}

