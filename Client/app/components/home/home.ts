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
    totalPages : number;
    
    cities = [
        // new CityModel("Test 1"),
        // new CityModel("Test 2"),
        // new CityModel("Test 3"),
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
        
        this.http.request('/cities/' + this.page)
            .subscribe((res)=>{
                
                let resObj = res.json();                
                console.log(resObj)                
                this.cities = resObj.data;
                this.totalPages = resObj.totalPages;
                
            }, (err)=>{
                console.log(err)
            });
    }
    
    btnNext(){
        this.page++;
        //this.fetchData();
        this.router.navigate(['/Home', {page: this.page}]);
    }
    
    btnPrevious(){
        this.page--;
        //this.fetchData();
        this.router.navigate(['/Home', {page: this.page}]);
    }
    
    showPrevious(){
        if(this.page < 2){
            return true;
        } else {
            return false;
        }
    }
    
    showNext(){
        if(this.page < this.totalPages){
            return false;
        } else {
            return true;
        }
    }
    
}

class CityModel{
    Name : string;
    
    constructor(name : string){
        this.Name = name;
    }
}
