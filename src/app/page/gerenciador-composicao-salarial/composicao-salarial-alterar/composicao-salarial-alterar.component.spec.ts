import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposicaoSalarialAlterarComponent } from './composicao-salarial-alterar.component';

describe('ComposicaoSalarialAlterarComponent', () => {
  let component: ComposicaoSalarialAlterarComponent;
  let fixture: ComponentFixture<ComposicaoSalarialAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposicaoSalarialAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposicaoSalarialAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
