import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { HomeService } from './home.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../alert/alert.service';
import { AlertController } from '@ionic/angular';
import { By } from '@angular/platform-browser';
var component;
var fixture;
var de;
var chilDebug;
var el;
var childEl;
describe('HomePage', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HomePage],
            providers: [HomeService, AlertService, AlertController],
            imports: [HttpClientModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents().then(function () {
            fixture = TestBed.createComponent(HomePage);
            component = fixture.componentInstance;
            de = fixture.debugElement.query(By.css('ion-title'));
            el = de.nativeElement;
            chilDebug = fixture.debugElement.query(By.css('child'));
            fixture.detectChanges();
        });
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should have title', function () {
        expect(el).toBeTruthy();
    });
    it('should have comics', function () {
        expect(component.comics.length).toBeGreaterThan(0);
    });
    it('should have card title', function () {
        expect(chilDebug).toBeTruthy();
    });
});
//# sourceMappingURL=home.page.spec.js.map