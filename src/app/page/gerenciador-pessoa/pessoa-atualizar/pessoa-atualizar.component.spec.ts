import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaAtualizarComponent } from './pessoa-atualizar.component';

describe('PessoaAtualizarComponent', () => {
  let component: PessoaAtualizarComponent;
  let fixture: ComponentFixture<PessoaAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
