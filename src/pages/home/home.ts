import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabContentComponent } from '../../components/tab-content/tab-content';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabsData:any;
  constructor(public navCtrl: NavController) {
     this.tabsData = this.GetInitialTestData();
  }

  private GetInitialTestData(){
    let tabsComponentList = new Array<any>();

    let tabData1=[
      {
        mainHeading:"Heading1",
        items:[
          {
            title:"item1 title1",
            subTitle:"item1 subTitle1"
          },
          {
            title:"item1 title2",
            subTitle:"item1 subTitle2"
          }
        ]
      },
      {
        mainHeading:"Heading2",
        items:[
          {
            title:"item2 title1",
            subTitle:"item2 subTitle1"
          },
          {
            title:"item2 title2",
            subTitle:"item2 subTitle2"
          },
          {
            title:"item2 title3",
            subTitle:"item2 subTitle3"
          }
        ]
      }
    ];

    let tabData2=[
      {
        mainHeading:"HeadingTab21",
        items:[
          {
            title:"item1 title1",
            subTitle:"item1 subTitle1"
          },
          {
            title:"item1 title2",
            subTitle:"item1 subTitle2"
          }
        ]
      },
      {
        mainHeading:"HeadingTab22",
        items:[
          {
            title:"item2 title1",
            subTitle:"item2 subTitle1"
          },
          {
            title:"item2 title2",
            subTitle:"item2 subTitle2"
          }
        ]
      }
    ]

    let tabsDataListItem1 = {icon:"icon1",title:"tab1",component:TabContentComponent,params:this.GetTabParameter(tabData1)};
    let tabsDataListItem2 = {icon:"icon2",title:"tab2",component:TabContentComponent,params:this.GetTabParameter(tabData2)};
    let tabsDataListItem3 = {icon:"icon2",title:"tab2",component:TabContentComponent,params:this.GetTabParameter(tabData2)};
    let tabsDataListItem4 = {icon:"icon2",title:"tab2",component:TabContentComponent,params:this.GetTabParameter(tabData2)};
    tabsComponentList.push(tabsDataListItem1);
    tabsComponentList.push(tabsDataListItem2);
    tabsComponentList.push(tabsDataListItem3);
    tabsComponentList.push(tabsDataListItem4);
    return tabsComponentList;
  }

  private GetTabParameter(tabData:any){
    return {
      tabsDataList: tabData
    }
  }
}
