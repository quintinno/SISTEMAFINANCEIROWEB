import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaListarComponent } from './pessoa-listar.component';

describe('PessoaListarComponent', () => {
  let component: PessoaListarComponent;
  let fixture: ComponentFixture<PessoaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
