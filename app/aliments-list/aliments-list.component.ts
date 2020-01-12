import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../service.service';
import { FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-aliments-list',
  providers: [ServiceService],
  templateUrl: './aliments-list.component.html',
  styleUrls: ['./aliments-list.component.css']
})
export class AlimentsListComponent implements OnInit {
  myAliments=this.serviceService.myAliments;
  alimentForm;

  constructor(
    private serviceService: ServiceService,
    private formBuilder: FormBuilder) {
      this.alimentForm = this.formBuilder.group({
        ig: 0,
        carbs: 0,
        name: ''
      });
     }

  ngOnInit() {
  }

  delete(aliment){
    this.myAliments.splice(this.myAliments.indexOf(aliment), 1 );
  }

  onNewAliment(aliment){
    if (aliment.name!='' && aliment.carbs!=0 && aliment.ig!=0) this.myAliments.unshift(aliment);
  }
}
