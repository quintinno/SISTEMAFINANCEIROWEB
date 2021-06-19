import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDespesaCadastrarComponent } from './tipo-despesa-cadastrar.component';

describe('TipoDespesaCadastrarComponent', () => {
  let component: TipoDespesaCadastrarComponent;
  let fixture: ComponentFixture<TipoDespesaCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDespesaCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDespesaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
