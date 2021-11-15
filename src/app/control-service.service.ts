import { Injectable } from '@angular/core';
import { ControlsArray } from './control-interface';

@Injectable({
  providedIn: 'root'
})
export class ControlServiceService {

  constructor() { }

  // Populating Control List with the type of Controls Array Interface
  controlList?: ControlsArray[]= [
    {
      name: 'Button',
      controlId: 'button'
    },
    {
      name: 'Textbox',
      controlId: 'textbox'
    },
    {
      name: 'Time',
      controlId: 'time'
    },
    {
      name: 'Header',
      controlId: 'header'
    }
  ];
}
