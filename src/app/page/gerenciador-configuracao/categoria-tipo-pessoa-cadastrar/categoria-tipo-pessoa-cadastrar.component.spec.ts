import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaTipoPessoaCadastrarComponent } from './categoria-tipo-pessoa-cadastrar.component';

describe('CategoriaTipoPessoaCadastrarComponent', () => {
  let component: CategoriaTipoPessoaCadastrarComponent;
  let fixture: ComponentFixture<CategoriaTipoPessoaCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaTipoPessoaCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaTipoPessoaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
