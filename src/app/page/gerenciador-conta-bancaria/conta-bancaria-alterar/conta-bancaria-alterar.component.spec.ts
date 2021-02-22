import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaBancariaAlterarComponent } from './conta-bancaria-alterar.component';

describe('ContaBancariaAlterarComponent', () => {
  let component: ContaBancariaAlterarComponent;
  let fixture: ComponentFixture<ContaBancariaAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaBancariaAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaBancariaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
