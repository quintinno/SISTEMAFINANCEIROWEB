import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaCadastrarComponent } from './receita-cadastrar.component';

describe('ReceitaCadastrarComponent', () => {
  let component: ReceitaCadastrarComponent;
  let fixture: ComponentFixture<ReceitaCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
