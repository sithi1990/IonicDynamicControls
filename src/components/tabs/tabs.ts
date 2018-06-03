import { Component, Input} from '@angular/core';
import { TabContentComponent } from '../tab-content/tab-content';

/**
 * Generated class for the TabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-tabs',
  templateUrl: 'tabs.html'
})
export class TabsComponent {

  text: string;
  @Input() tabsComponentList:Array<{
    icon:string,
    title:string,
    component:any,
    params:any
  }>;
   
  constructor() {
    console.log('Hello TabsComponent Component');
  }

  
}
