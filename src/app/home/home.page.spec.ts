import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { HomeService } from './home.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../alert/alert.service';
import { AlertController } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { DateParseFormat } from '../pipes/dateParseFormat.pipe';

let component: HomePage
let cardComponent: CardComponent
let fixture: ComponentFixture<HomePage>
let childFixture: ComponentFixture<CardComponent>
let de: DebugElement
let el: HTMLElement

describe('HomePage', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage, CardComponent, DateParseFormat ],
      providers: [HomeService, AlertService, AlertController],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(HomePage)
        component = fixture.componentInstance
        de = fixture.debugElement.query(By.css('ion-title'))
        el = de.nativeElement
        fixture.detectChanges()

        childFixture = TestBed.createComponent(CardComponent)
        cardComponent = childFixture.componentInstance
        
      })
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have title', () => {
    expect(el).toBeTruthy()
  })

  it('should have comics', () => {
    expect(component.comics.length).toBeGreaterThan(0)
  })

  it('should have comic title', () => {
    de = childFixture.debugElement.query(By.css('ion-card-title'))
    el = de.nativeElement
    expect(el).toBeTruthy()
  })

  it('should have comic date', () => {
    de = childFixture.debugElement.query(By.css('#comic-date'))
    el = de.nativeElement
    expect(el).toBeTruthy()
  })

  it('should have comic likes', () => {
    de = childFixture.debugElement.query(By.css('#comic-likes'))
    el = de.nativeElement
    expect(el).toBeTruthy()
  })

  it('should have comic dislikes', () => {
    de = childFixture.debugElement.query(By.css('#comic-dislikes'))
    el = de.nativeElement
    expect(el).toBeTruthy()
  })

})
