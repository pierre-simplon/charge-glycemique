import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService} from '../service.service';
import { PortionServiceService } from '../portion-service.service';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  providers: [ServiceService,PortionServiceService],
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  portionForm;
  Portion={name:'',weight:0,calculatedIG:0};
  myAliments=this.serviceService.myAliments;
  portionArray=this.portionService.portionArray;

  constructor(private formBuilder: FormBuilder,
    private serviceService: ServiceService,
    private portionService: PortionServiceService) {
    this.portionForm=this.formBuilder.group({
      name: '',
      weight: ''
    });
    this.portionArray=[]
   }

  ngOnInit() {
  }

  onNewPortion(portion){
  /*  console.log("Nom de la portion: "+portion.name);
    this.Portion.name=portion.name;

    console.log("l'IG de l'aliment de la portion: "+this.myAliments.find(aliment => aliment.name == portion.name).ig);
    this.Portion.calculatedIG=portion.weight*this.myAliments.find(aliment => aliment.name == portion.name).ig/100;

    console.log("Poids de la portion"+portion.weight);
    this.Portion.weight=portion.weight;

    console.log("Le tableau des portions: "+this.portionArray); */
    this.portionArray.push({name: portion.name,weight: portion.weight, calculatedIG: this.myAliments.find(aliment => aliment.name == portion.name).ig});
  }

  delete(portion){
    this.portionArray.splice(this.portionArray.indexOf(portion),1);
  }


}
