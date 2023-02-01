import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-observables-promises',
  templateUrl: './observables-promises.component.html',
  styleUrls: ['./observables-promises.component.css']
})
export class ObservablesPromisesComponent implements OnInit {
  data:any;
  constructor(private http:HttpClient)
  {

  }
  ngOnInit(): void {
    debugger;
    console.log("OnInit Method is executed");
    this.GetData();
  }
  GetData(){
    this.http.get("http://localhost:6210/api/AngularLearning")
   .subscribe(s=> this.data=s);
   console.log(this.data);
 }
  
}
