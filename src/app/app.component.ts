import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy {
  title = 'app';
   count=120
   timerSub:Subscription;


 ngOnInit(): void {
    const timer= interval(1000);
    this.timerSub=timer.subscribe((dec)=>{
      if(this.count>0){
        this.count--;
      }
      else{
        this.stopTimer()

      }
    })
 }

onStop(){
  console.log('timmer stoped');
    this.stopTimer()
}
private stopTimer(){
  if(this.timerSub){
    this.timerSub.unsubscribe()
  }
}

 ngOnDestroy(): void {
    this.stopTimer()
 }


}
