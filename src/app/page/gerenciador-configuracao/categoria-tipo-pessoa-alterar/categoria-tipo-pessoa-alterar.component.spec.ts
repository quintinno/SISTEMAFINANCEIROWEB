import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaTipoPessoaAlterarComponent } from './categoria-tipo-pessoa-alterar.component';

describe('CategoriaTipoPessoaAlterarComponent', () => {
  let component: CategoriaTipoPessoaAlterarComponent;
  let fixture: ComponentFixture<CategoriaTipoPessoaAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaTipoPessoaAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaTipoPessoaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
