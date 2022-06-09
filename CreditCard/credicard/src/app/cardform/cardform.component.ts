import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.css']
})
export class CardformComponent implements OnInit {

  cardForm = new FormGroup({
    name:new FormControl(null,[
      Validators.required,
      Validators.minLength(3)
    ]),
  })


  constructor() {  }

  ngOnInit(): void {
  }

}
