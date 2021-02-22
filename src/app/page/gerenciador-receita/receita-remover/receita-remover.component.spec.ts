import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaRemoverComponent } from './receita-remover.component';

describe('ReceitaRemoverComponent', () => {
  let component: ReceitaRemoverComponent;
  let fixture: ComponentFixture<ReceitaRemoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaRemoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
