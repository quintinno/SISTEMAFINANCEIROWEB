import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaFixaCadastrarComponent } from './despesa-fixa-cadastrar.component';

describe('DespesaFixaCadastrarComponent', () => {
  let component: DespesaFixaCadastrarComponent;
  let fixture: ComponentFixture<DespesaFixaCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesaFixaCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaFixaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
