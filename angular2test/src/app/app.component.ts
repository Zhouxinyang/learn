import { Component } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`
      <div class="container">
      <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">{{ title }}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
            <div class="col-md-6">
          <input type="text" class="form-control" placeholder="请输入内容" value="laowu" [(ngModel)]="mail.message" #textone>{{mail.message}}
           </div>
             <div class="col-md-6">
           <button type="button" class="btn btn-danger" (click)="onClick(textone.value)">显示</button>
           </div>
            </div>
          </div>
      </div>
            <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">demo2</h3>
          </div>
          <div class="panel-body">

            <div class="row" [ngStyle]="{'text-align':'center'}">
            显示颜色
                 <!-- <input type="text" class="form-control">-->
           </div>
            <div class="row">
                <div class="col-md-6">
                  <button type="button" class="btn btn-primary btn-block">蓝色</button>
                </div>
                <div class="col-md-6">
                  <button type="button" class="btn btn-danger btn-block">红色</button>
                </div>
           </div>
                <div class="row" [ngStyle]="{'text-align':'center'}">
                浏览颜色
                </div>
            </div>
               <div class="row" [ngStyle]="{'text-align':'center'}">
                  <button type="button" class="btn btn-danger">重置</button>
              </div>
      </div>
      </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  onClick(value){
    console.log(value);
  }

  constructor(private mail:MailService){

  }
}
