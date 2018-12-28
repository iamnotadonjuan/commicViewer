var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from "@angular/core";
var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.handleParent = new EventEmitter();
    }
    /**
     *
     * @param payload - Object { isLike: Boolean, comicId: Number }
     * Emit the event from the child (cardComponent) to the parent (homePage)
     */
    CardComponent.prototype._sendToParent = function (payload) {
        this.handleParent.emit(payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "comic", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "handleParent", void 0);
    CardComponent = __decorate([
        Component({
            selector: 'app-card',
            templateUrl: 'card.component.html',
            styleUrls: ['card.component.scss']
        })
    ], CardComponent);
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=card.component.js.map