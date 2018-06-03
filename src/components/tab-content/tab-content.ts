import { Component, Input} from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the TabContentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tab-content',
  templateUrl: 'tab-content.html'
})
export class TabContentComponent {

  tabsDataList: Array<{mainHeading:string,items:Array<{title:string,subTitle:string}>}>;

  constructor(params: NavParams) {
    this.tabsDataList = params.data.tabsDataList;
    console.log('Hello TabContentComponent Component');
  }

}
