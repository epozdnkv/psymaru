import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards : any = [
    {
      "id": 0
      ,"path" : "../../assets/img/cards/0.png"
      ,"description": "Выберите карту дня"
    }
    ,{
      "id": 1
      ,"path" : "../../assets/img/cards/1.png"
      ,"description": "Выберите карту дня"
    }
    ,{
      "id": 2
      ,"path" : "../../assets/img/cards/2.png"
      ,"description": "Выберите карту дня"
    }
    ,{
      "id": 3
      ,"path" : "../../assets/img/cards/3.png"
      ,"description": "Выберите карту дня"
    }
    ,{
      "id": 4
      ,"path" : "../../assets/img/cards/4.png"
      ,"description": "Выберите карту дня"
    }
    ,{
      "id": 5
      ,"path" : "../../assets/img/cards/5.png"
      ,"description": "Выберите карту дня"
    }
    ,{
      "id": 6
      ,"path" : "../../assets/img/cards/6.png"
      ,"description": "Выберите карту дня"
    }
    ,{
      "id": 7
      ,"path" : "../../assets/img/cards/7.png"
      ,"description": "Выберите карту дня"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
