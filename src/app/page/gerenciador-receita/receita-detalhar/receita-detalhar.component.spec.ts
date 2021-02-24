import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaDetalharComponent } from './receita-detalhar.component';

describe('ReceitaDetalharComponent', () => {
  let component: ReceitaDetalharComponent;
  let fixture: ComponentFixture<ReceitaDetalharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaDetalharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
