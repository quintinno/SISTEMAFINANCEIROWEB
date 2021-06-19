import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoContratoCadastrarComponent } from './tipo-contrato-cadastrar.component';

describe('TipoContratoCadastrarComponent', () => {
  let component: TipoContratoCadastrarComponent;
  let fixture: ComponentFixture<TipoContratoCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoContratoCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoContratoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
