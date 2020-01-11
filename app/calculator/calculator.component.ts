import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService} from '../service.service';
import { PortionServiceService } from '../portion-service.service';
import { Portion } from '../interface-portion';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  providers: [ServiceService,PortionServiceService],
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  portionForm;
  totalGlucide=0;
  myAliments=this.serviceService.myAliments;
  portionArray=this.portionService.portionArray;

  constructor(private formBuilder: FormBuilder,
    private serviceService: ServiceService,
    private portionService: PortionServiceService) {
    this.portionForm=this.formBuilder.group({
      name: '',
      weight: ''
    });
   }

  ngOnInit() {
  }

  onNewPortion(portion){
    console.log("La portion: "+portion);
    console.log("Nom de la portion: "+portion.name);

    console.log("l'IG de l'aliment de la portion: "+this.myAliments.find(aliment => aliment.name == portion.name).ig);

    console.log("Poids de la portion"+portion.weight);

    console.log("Le tableau des portions: "+this.portionArray); 
    let portionCalculatedGlucide:number = Math.round(this.myAliments.find(aliment => aliment.name == portion.name).ig*portion.weight)/100;
    let portionToStore : Portion = {name: portion.name,
      weight: portion.weight,
      calculatedIG: this.myAliments.find(aliment => aliment.name == portion.name).ig,
      glucide: portionCalculatedGlucide}
    this.portionArray.push(portionToStore);
/*      glucide:Math.round(this.myAliments.find(aliment => aliment.name == portion.name).ig*portion.weight)/100}); */
    this.totalGlucide=this.totalGlucide+portionCalculatedGlucide;
  }

  delete(portion){
    this.portionArray.splice(this.portionArray.indexOf(portion),1);
    let portionCalculatedGlucide:number = Math.round(this.myAliments.find(aliment => aliment.name == portion.name).ig*portion.weight)/100;
    this.totalGlucide=this.totalGlucide-portionCalculatedGlucide;
  }


}
