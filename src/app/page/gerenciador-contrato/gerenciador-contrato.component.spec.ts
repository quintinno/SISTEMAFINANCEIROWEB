import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorContratoComponent } from './gerenciador-contrato.component';

describe('GerenciadorContratoComponent', () => {
  let component: GerenciadorContratoComponent;
  let fixture: ComponentFixture<GerenciadorContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciadorContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadorContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
