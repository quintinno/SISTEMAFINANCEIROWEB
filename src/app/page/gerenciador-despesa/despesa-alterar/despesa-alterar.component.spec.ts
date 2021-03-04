import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaAlterarComponent } from './despesa-alterar.component';

describe('DespesaAlterarComponent', () => {
  let component: DespesaAlterarComponent;
  let fixture: ComponentFixture<DespesaAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesaAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
