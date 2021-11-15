import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ConnectableObservable } from 'rxjs';
import { ControlServiceService } from './control-service.service';
import { ControlsArray } from './control-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private controlSvc: ControlServiceService){}

  title = 'Drag & Drop';
  controlList?: ControlsArray[]= this.controlSvc.controlList;
  controlType: any;
  data: any;

  /**
   * @param draggedEvent The event triggered when a particular control is dragged from the control list
   */
  onDrag(draggedEvent?:any){
    
    draggedEvent.dataTransfer.setData("text", draggedEvent.target.id);
  }
  /**
   * @param droppedEvent The event triggered when a particular control is dropped on the rendering space
   */
  onDrop(droppedEvent?:any){
    droppedEvent.preventDefault();
    this.data = droppedEvent.dataTransfer.getData("text");
    this.controlList = this.controlSvc.controlList;
  }
  /** This method is to prevent the browser from restricting to drag and drop
   */
  allowDrop(draggedEvent?:any){
    draggedEvent.preventDefault() ;
  }
}