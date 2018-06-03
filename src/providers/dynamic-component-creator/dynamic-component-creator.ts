import { HttpClient } from '@angular/common/http';
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { TestDynamicComponent } from '../../components/test-dynamic/test-dynamic';
import 'rxjs/add/operator/map';
/*
  Generated class for the DynamicComponentCreatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DynamicComponentCreatorProvider {

  rootViewContainer:any;
  jsonData:any;
  dataGroups:any[];
  components:any[];

  constructor(public http:HttpClient, public factoryResolver:ComponentFactoryResolver) {
    
  }

  public setRootViewContainerRef(viewContainerRef:any) {
    this.components = [];
    this.rootViewContainer = viewContainerRef
  }

  public async addDynamicComponent() {

    var data = await this.readUIJson();
    this.initUIComponents(data); 

  }

  public initUIComponents(json){
      this.jsonData = json;
      this.jsonData.dataGroups[2].fields.forEach(element => {
        if(element.type === "editor"){
          const factory = this.factoryResolver.resolveComponentFactory(TestDynamicComponent)
          const component = factory.create(this.rootViewContainer.parentInjector);   
         
          let componentInstance = component.instance;
          componentInstance.title = element.title;
          componentInstance.text = element.value;
          
          this.components.push({
            id:element.fieldId,
            component:componentInstance
          });
          this.rootViewContainer.insert(component.hostView);       
        }
      });
  }

  public readUIJson(){
   return new Promise((resolve,reject) =>{
    this.http.get('../../assets/ui/ui_components.json')
      .map(res => res)
      .subscribe(json => {
        resolve(json);
      });
   });
  }
  
  public extractValues(){

    let elementValues:any[] =[];
    this.components.forEach(element =>{
        if(element.id){
          elementValues.push({id:element.id,value:element.component.text});
        }
    });   
    return JSON.stringify(elementValues);
  }
}
