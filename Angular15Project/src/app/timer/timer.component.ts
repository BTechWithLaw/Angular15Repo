import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  data:any;
  constructor(private http:HttpClient){
    console.log("Constructor is initialized");
  }
  ngOnInit(): void {
    debugger;
    console.log("OnInit Method is executed");
    this.GetData();
  }

  GetData(){
     this.http.get("http://localhost:6210/api/Employee")
    .subscribe(s=> this.data=s);
    console.log(this.data);
  }

  
}
