import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStart = new EventEmitter<number>();
  @Output() gameStop = new EventEmitter<number>();

  tmp: number = 0;
   myInterval;

  constructor() {}

  ngOnInit(): void {
  }

  onStart = () => {
    this.myInterval = setInterval(() =>{
      this.gameStart.emit(this.tmp + 1)
      this.tmp++
    }, 1000);
  }
  onStop(){
     clearInterval(this.myInterval);
   }

}
