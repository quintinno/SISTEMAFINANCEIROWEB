import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorComposicaoSalarialComponent } from './gerenciador-composicao-salarial.component';

describe('GerenciadorComposicaoSalarialComponent', () => {
  let component: GerenciadorComposicaoSalarialComponent;
  let fixture: ComponentFixture<GerenciadorComposicaoSalarialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciadorComposicaoSalarialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadorComposicaoSalarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
