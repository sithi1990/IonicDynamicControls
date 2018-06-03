import { Component } from '@angular/core';

/**
 * Generated class for the TestDynamicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'test-dynamic',
  templateUrl: 'test-dynamic.html'
})
export class TestDynamicComponent {

  text: string;
  title: string;
  constructor() {
    console.log('Hello TestDynamicComponent Component');
  }

}
