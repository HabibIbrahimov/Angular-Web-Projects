import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText = lorem.sentence();
  enteredText = '';
  can="incorrect";


  getInputValue(value: string)
  {
    console.log(this.randomText.split(''));
    this.enteredText=value;

  }

  compare(randomLetter: string , enteredLetter: string)
  {
   if(!enteredLetter)
   {
     return 'pending';
   }

   return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }

}
