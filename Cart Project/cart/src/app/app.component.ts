import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {
      title:'Dağ Bisikleti',
      imageUrl:'assets/biking.jpeg',
      username:'cbdag',
      content:'Çok hızlı sürdüm'
    },
    {
     title: 'Tırmanış',
     imageUrl: 'assets/mountain.jpeg',
     username: 'cbuludag',
     content: 'Bugünde iyi tırmandım'
   },
   {
     title: 'Doğa Yürüyüşü',
     imageUrl: 'assets/tree.jpeg',
     username: 'cbdoga',
     content: 'Hadi biraz Maçka Parkında turlayalım'
   },
 
  ]
}
