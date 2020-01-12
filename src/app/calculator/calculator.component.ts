import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  portionForm: FormGroup;
  totalGlucide=0;
  myAliments=this.serviceService.myAliments.sort((a,b) =>  a.name.localeCompare(b.name));
  portionArray=this.portionService.portionArray;

  constructor(private formBuilder: FormBuilder,
    private serviceService: ServiceService,
    private portionService: PortionServiceService) {}

  ngOnInit() {
    this.portionForm=this.formBuilder.group({
      name: '',
      weight: 0
    });
  }

  onNewPortion(portion){
    if (portion.name!='' && portion.weight!=0) {

      let portionCalculatedGlucide:number = Math.round(this.myAliments.find(aliment => aliment.name == portion.name).ig*portion.weight)/100;
    
      let portionToStore : Portion = {
        name: portion.name,
        weight: portion.weight,
        calculatedIG: this.myAliments.find(aliment => aliment.name == portion.name).ig,
        glucide: portionCalculatedGlucide}
    
      this.portionArray.push(portionToStore);

      this.totalGlucide=this.totalGlucide+portionCalculatedGlucide;
      }      
  }

  delete(portion){
    this.portionArray.splice(this.portionArray.indexOf(portion),1);
    let portionCalculatedGlucide:number = Math.round(this.myAliments.find(aliment => aliment.name == portion.name).ig*portion.weight)/100;
    this.totalGlucide=this.totalGlucide-portionCalculatedGlucide;
  }


}
