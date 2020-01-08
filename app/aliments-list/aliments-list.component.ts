import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../service.service'

@Component({
  selector: 'app-aliments-list',
  templateUrl: './aliments-list.component.html',
  styleUrls: ['./aliments-list.component.css']
})
export class AlimentsListComponent implements OnInit {
  myAliments=this.serviceService.myAliments;

  delete(aliment){
    this.myAliments.splice(this.myAliments.indexOf(aliment), 1 );
  }

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
  }

}
