import { Component, OnInit } from '@angular/core';
import { Aliment } from '../interfaces';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  addedAliments: Aliment[]=[{
    "ig": 110,
    "carbs": 4.5,
    "name": "Bière"
  },
  {
    "ig": 100,
    "carbs": 100,
    "name": "Glucose"
  },
  {
    "ig": 95,
    "carbs": 73,
    "name": "Farine de riz blanc"
  }];

  constructor() { }

  ngOnInit() {
  }

}
