import { Component } from '@angular/core';
import {DOMEvents} from "./DOMEvents";
import {delay} from "rxjs/operator/delay";

@Component({
  selector: 'app-root',
  template:`<app-header></app-header>
            
            <app-main></app-main>


`
})
export class AppComponent {

  constructor( domEvents: DOMEvents ) {

    domEvents.triggerOnDocument( "appready" );


      }


}


