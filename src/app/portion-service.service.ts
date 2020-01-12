import { Injectable } from '@angular/core';
import { Portion } from './interface-portion';

@Injectable({
  providedIn: 'root'
})
export class PortionServiceService {

  portionArray: Portion[] = [];

  constructor() { }
}
