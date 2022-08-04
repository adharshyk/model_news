import { Component, OnInit } from '@angular/core';
import { dummydata } from 'src/app/dummydata';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  Politics!: Array<any>;
  Sports!: Array<any>;

  constructor(private dummydataService :dummydata ) { }

  ngOnInit(): void {
    
    this.dummydataService.getTestData()
    .then(res => {
         // console.log(res)
          this.Politics=  res["politics"];
           this.Sports= res["sports"];
  })
  }
}
