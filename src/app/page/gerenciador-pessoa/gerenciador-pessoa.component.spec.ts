import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorPessoaComponent } from './gerenciador-pessoa.component';

describe('GerenciadorPessoaComponent', () => {
  let component: GerenciadorPessoaComponent;
  let fixture: ComponentFixture<GerenciadorPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciadorPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadorPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
