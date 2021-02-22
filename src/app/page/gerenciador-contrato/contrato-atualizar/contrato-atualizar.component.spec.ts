import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoAtualizarComponent } from './contrato-atualizar.component';

describe('ContratoAtualizarComponent', () => {
  let component: ContratoAtualizarComponent;
  let fixture: ComponentFixture<ContratoAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
