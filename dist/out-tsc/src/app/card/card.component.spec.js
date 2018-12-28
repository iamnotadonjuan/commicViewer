/* let component: CardComponent
let fixture: ComponentFixture<CardComponent>
let de: DebugElement
let el: HTMLElement

describe('CardComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent, DateParseFormat ],
      providers: [],
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(CardComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
      })
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })

})
*/ 
//# sourceMappingURL=card.component.spec.js.map