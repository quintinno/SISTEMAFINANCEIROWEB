import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorDespesaFixaComponent } from './gerenciador-despesa-fixa.component';

describe('GerenciadorDespesaFixaComponent', () => {
  let component: GerenciadorDespesaFixaComponent;
  let fixture: ComponentFixture<GerenciadorDespesaFixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciadorDespesaFixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadorDespesaFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
