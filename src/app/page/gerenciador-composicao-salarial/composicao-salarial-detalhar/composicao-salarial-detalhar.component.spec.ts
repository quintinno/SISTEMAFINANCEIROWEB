import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposicaoSalarialDetalharComponent } from './composicao-salarial-detalhar.component';

describe('ComposicaoSalarialDetalharComponent', () => {
  let component: ComposicaoSalarialDetalharComponent;
  let fixture: ComponentFixture<ComposicaoSalarialDetalharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposicaoSalarialDetalharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposicaoSalarialDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
