import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorReceitaComponent } from './gerenciador-receita.component';

describe('GerenciadorReceitaComponent', () => {
  let component: GerenciadorReceitaComponent;
  let fixture: ComponentFixture<GerenciadorReceitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciadorReceitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadorReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
