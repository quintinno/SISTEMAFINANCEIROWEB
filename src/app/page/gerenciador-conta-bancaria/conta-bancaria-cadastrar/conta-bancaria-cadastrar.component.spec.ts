import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaBancariaCadastrarComponent } from './conta-bancaria-cadastrar.component';

describe('ContaBancariaCadastrarComponent', () => {
  let component: ContaBancariaCadastrarComponent;
  let fixture: ComponentFixture<ContaBancariaCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaBancariaCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaBancariaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
