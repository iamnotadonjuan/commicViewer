var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.urlBase = 'http://gateway.marvel.com/v1/public/comics';
    }
    /**
     *
     * @param offset - Number
     * Return a http request
     */
    HomeService.prototype.getCommics = function (offset) {
        if (offset === void 0) { offset = 0; }
        return this.http.get(this.urlBase + "?ts=1&apikey=" + environment.apiPublicKey + "&hash=" + environment.apiHashKey + "&limit=50&offset=" + offset);
    };
    HomeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], HomeService);
    return HomeService;
}());
export { HomeService };
//# sourceMappingURL=home.service.js.map