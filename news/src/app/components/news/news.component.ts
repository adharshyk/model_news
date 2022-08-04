import { Component, Input, OnInit } from '@angular/core';
import { sportsitem } from 'src/app/sportsnews/sportsitem';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input()
  news!: sportsitem ;
  constructor() { }

  ngOnInit(): void {
  }

}
