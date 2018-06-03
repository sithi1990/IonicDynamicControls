import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsComponent } from '../components/tabs/tabs';
import { TabContentComponent } from '../components/tab-content/tab-content';
import { DynamicComponentCreatorProvider } from '../providers/dynamic-component-creator/dynamic-component-creator';
import { TestDynamicComponent } from '../components/test-dynamic/test-dynamic';
import { DynamicComponentsPage } from '../pages/dynamic-components/dynamic-components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsComponent,
    TabContentComponent,
    TestDynamicComponent,
    DynamicComponentsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsComponent,
    TabContentComponent,
    TestDynamicComponent,
    DynamicComponentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DynamicComponentCreatorProvider
  ]
})
export class AppModule {}
