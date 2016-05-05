import { Component } from "angular2/core" ;
import { Router, RouteParams } from 'angular2/router';
import { Http } from 'angular2/http';


@Component({
    selector: 'home',
    directives: [],
    templateUrl: "./app/components/home/home.html"
})
export class HomeComponent {
    
    page : number;
    
    
    cities = [
        // new CityModel("Test 1"),
        // new CityModel("Test 2"),
        // new CityModel("Test 3"),
        // new CityModel("Test 4"),
        // new CityModel("Test 5"),
        // new CityModel("Test 6"),
        // new CityModel("Test 1"),
        // new CityModel("Test 1"),
        // new CityModel("Test 1"),
        // new CityModel("Test 1"),
        // new CityModel("Test 1"),
        // new CityModel("Test 1"),
        // new CityModel("Test 1"),
        // new CityModel("Test 1"),
        // new CityModel("Test 1"),
        // new CityModel("Test 1"),
        // new CityModel("Test 1"),
        // new CityModel("Test 1"),
        // new CityModel("Test 1")
    ]
    
    constructor(
        public router: Router, 
        public params: RouteParams,
        public http : Http
        ){

        this.page = Number(params.get('page'));
        
        this.fetchData();
    }
    
    fetchData(){
        this.http.request('/cities')
            .subscribe((res)=>{
                console.log(res.json())
                this.cities = res.json();
            }, (err)=>{
                console.log(err)
            })
    }
    
}

class CityModel{
    name : string;
    
    constructor(name : string){
        this.name = name;
    }
}
