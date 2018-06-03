import { Component, ViewContainerRef, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DynamicComponentCreatorProvider } from '../../providers/dynamic-component-creator/dynamic-component-creator';

/**
 * Generated class for the DynamicComponentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dynamic-components',
  templateUrl: 'dynamic-components.html',
})
export class DynamicComponentsPage implements OnInit {

  text:string;

  @ViewChild('dynamic', { 
    read: ViewContainerRef 
  }) viewContainerRef: ViewContainerRef
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public uiService:DynamicComponentCreatorProvider) {
    
  }

  ngOnInit() {
    this.uiService.setRootViewContainerRef(this.viewContainerRef);
    this.uiService.addDynamicComponent();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DynamicComponentsPage');
  }

  getData(){
    this.text=this.uiService.extractValues();
  }

}
