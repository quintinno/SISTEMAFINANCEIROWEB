import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorEmprestimoComponent } from './gerenciador-emprestimo.component';

describe('GerenciadorEmprestimoComponent', () => {
  let component: GerenciadorEmprestimoComponent;
  let fixture: ComponentFixture<GerenciadorEmprestimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciadorEmprestimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadorEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
