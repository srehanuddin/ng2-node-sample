System.register(["angular2/core", 'angular2/router', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1;
    var HomeComponent, CityModel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(router, params, http) {
                    this.router = router;
                    this.params = params;
                    this.http = http;
                    this.cities = [];
                    this.page = Number(params.get('page'));
                    this.fetchData();
                }
                HomeComponent.prototype.fetchData = function () {
                    var _this = this;
                    this.http.request('/cities')
                        .subscribe(function (res) {
                        console.log(res.json());
                        _this.cities = res.json();
                    }, function (err) {
                        console.log(err);
                    });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        directives: [],
                        templateUrl: "./app/components/home/home.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, http_1.Http])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
            CityModel = (function () {
                function CityModel(name) {
                    this.name = name;
                }
                return CityModel;
            })();
        }
    }
});
//# sourceMappingURL=home.js.map