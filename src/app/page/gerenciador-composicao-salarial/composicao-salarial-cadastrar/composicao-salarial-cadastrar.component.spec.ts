import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposicaoSalarialCadastrarComponent } from './composicao-salarial-cadastrar.component';

describe('ComposicaoSalarialCadastrarComponent', () => {
  let component: ComposicaoSalarialCadastrarComponent;
  let fixture: ComponentFixture<ComposicaoSalarialCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposicaoSalarialCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposicaoSalarialCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
