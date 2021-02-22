import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaAtualizarComponent } from './receita-atualizar.component';

describe('ReceitaAtualizarComponent', () => {
  let component: ReceitaAtualizarComponent;
  let fixture: ComponentFixture<ReceitaAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
