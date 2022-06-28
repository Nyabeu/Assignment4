import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 oddNumbers: number[] = [];
 evenNumbers: number[] = [];

  onStartGame(numberData: number){
    if(numberData % 2 === 0){
      this.evenNumbers.push(numberData)
    }else{
      this.oddNumbers.push(numberData)
    }

  }

  onStopGame(numberData: number){
    console.log(numberData);
  }
}
