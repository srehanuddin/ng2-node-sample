import { Component } from "angular2/core" ;
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import {SideMenuComponent} from "./components/side-menu/side-menu"
import {HomeComponent} from "./components/home/home"

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, SideMenuComponent],
    templateUrl: "./app/app.html"
})
@RouteConfig([
  { path: '/', name: 'root', redirectTo: ['/Home', { page: 1 }] },
  { path: '/home/:page', name: 'Home', component: HomeComponent, useAsDefault : true },
  //{ path: '/home/:id', name: 'HomePage', component: HomeComponent },
  { path: '**', redirectTo: ['/Home', { page: 1 }] }
])
export class App { 

    constructor(){

    } 
    
}


