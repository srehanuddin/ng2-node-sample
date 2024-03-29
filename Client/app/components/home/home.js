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
                    this.http.request('/cities/' + this.page)
                        .subscribe(function (res) {
                        var resObj = res.json();
                        console.log(resObj);
                        _this.cities = resObj.data;
                        _this.totalPages = resObj.totalPages;
                    }, function (err) {
                        console.log(err);
                    });
                };
                HomeComponent.prototype.btnNext = function () {
                    this.page++;
                    //this.fetchData();
                    this.router.navigate(['/Home', { page: this.page }]);
                };
                HomeComponent.prototype.btnPrevious = function () {
                    this.page--;
                    //this.fetchData();
                    this.router.navigate(['/Home', { page: this.page }]);
                };
                HomeComponent.prototype.showPrevious = function () {
                    if (this.page < 2) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                HomeComponent.prototype.showNext = function () {
                    if (this.page < this.totalPages) {
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        directives: [],
                        templateUrl: "./app/components/home/home.html"
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
                ], HomeComponent);
                return HomeComponent;
                var _a, _b, _c;
            })();
            exports_1("HomeComponent", HomeComponent);
            CityModel = (function () {
                function CityModel(name) {
                    this.Name = name;
                }
                return CityModel;
            })();
        }
    }
});
//# sourceMappingURL=home.js.map