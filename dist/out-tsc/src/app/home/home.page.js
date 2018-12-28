var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { AlertService } from '../alert/alert.service';
var HomePage = /** @class */ (function () {
    function HomePage(homeService, alrt) {
        this.homeService = homeService;
        this.alrt = alrt;
        this.comics = [];
        this.isLoading = false;
        this.offset = 0;
        this.likesDislikesPerComic = [];
    }
    HomePage.prototype.ngOnInit = function () {
        this.retrieveComics();
    };
    /**
     * Return: Array Of Objects.
     * Call the homeService to retrieve the comics and push it into the comics array
     */
    HomePage.prototype.retrieveComics = function () {
        var _this = this;
        this.isLoading = true;
        this.homeService.getCommics()
            .subscribe(function (data) {
            _this.isLoading = false;
            if (data['data'].results.length > 0) {
                data['data'].results.forEach(function (element) {
                    _this.comics.push(Object.assign({}, element, { likes: 0, dislikes: 0, likeActive: false, dislikeActive: false }));
                });
            }
            else {
                _this.alrt.presentAlert('Error', undefined, 'Comics not found', undefined);
            }
        }, function (err) {
            _this.alrt.presentAlert('Error', undefined, 'Error trying load comics', undefined);
            _this.isLoading = false;
            console.log('err', err);
        });
    };
    /**
     *
     * @param event - the event of the ion-infinite-scroll to complete the call.
     * Return Array of objecs
     * Call the homeService to retrieve the comics and push it into the comics array
     */
    HomePage.prototype.doInfinite = function (event) {
        var _this = this;
        this.offset += 50;
        this.homeService.getCommics(this.offset)
            .subscribe(function (data) {
            if (data['data'].results.length > 0) {
                var newData_1 = [];
                data['data'].results.forEach(function (element) {
                    newData_1.push(Object.assign({}, element, { likes: 0, dislikes: 0, likeActive: false, dislikeActive: false }));
                });
                newData_1.map(function (data) { return _this.comics.push(data); });
                event.target.complete();
            }
            else {
                _this.alrt.presentAlert('Error', undefined, 'Comics not found', undefined);
            }
        }, function (err) {
            _this.alrt.presentAlert('Error', undefined, 'Error trying load comics', undefined);
            console.log('err', err);
        });
    };
    /**
     *
     * @param data - Object { isLike: Boolean, comicId: Number }
     * handle the like and dislike event
     */
    HomePage.prototype.likeDislike = function (data) {
        if (data.isLike) {
            var likesDislikesIndex = this.comics.findIndex(function (comic) { return comic.id === data.comicId; });
            this.comics[likesDislikesIndex].likes++;
            this.comics[likesDislikesIndex].likeActive = true;
            this.comics[likesDislikesIndex].dislikeActive = false;
            if (this.comics[likesDislikesIndex].dislikes > 0)
                this.comics[likesDislikesIndex].dislikes--;
        }
        else {
            var likesDislikesIndex = this.comics.findIndex(function (comic) { return comic.id === data.comicId; });
            this.comics[likesDislikesIndex].dislikes++;
            this.comics[likesDislikesIndex].likeActive = false;
            this.comics[likesDislikesIndex].dislikeActive = true;
            if (this.comics[likesDislikesIndex].likes > 0)
                this.comics[likesDislikesIndex].likes--;
        }
    };
    HomePage = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
        }),
        __metadata("design:paramtypes", [HomeService, AlertService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map