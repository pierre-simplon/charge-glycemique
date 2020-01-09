import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Portion  } from '../interface-portion';
import { ServiceService} from '../service.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  providers: [ServiceService],
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  portionForm;
  portionArray: Portion[] = [];
  Portion={name:'',weight:0,calculatedIG:0};
  myAliments=this.serviceService.myAliments;

  constructor(private formBuilder: FormBuilder,
    private serviceService: ServiceService) {
    this.portionForm=this.formBuilder.group({
      name: '',
      weight: ''
    });
   }

  ngOnInit() {
  }

  onNewPortion(portion){
    console.log("Nom de la portion: "+portion.name);
    this.Portion.name=portion.name

    console.log("l'IG de l'aliment de la portion: "+this.myAliments.find(aliment => aliment.name == portion.name).ig);
    this.Portion.calculatedIG=portion.weight*this.myAliments.find(aliment => aliment.name == portion.name).ig/100;

    console.log("Poids de la portion"+portion.weight);
    this.Portion.weight=portion.weight

    this.portionArray.push(this.Portion);
  }


}
