import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorDespesaComponent } from './gerenciador-despesa.component';

describe('GerenciadorDespesaComponent', () => {
  let component: GerenciadorDespesaComponent;
  let fixture: ComponentFixture<GerenciadorDespesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciadorDespesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadorDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
