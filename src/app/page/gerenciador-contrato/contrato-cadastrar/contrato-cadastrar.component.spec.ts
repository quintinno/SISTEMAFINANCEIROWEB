import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoCadastrarComponent } from './contrato-cadastrar.component';

describe('ContratoCadastrarComponent', () => {
  let component: ContratoCadastrarComponent;
  let fixture: ComponentFixture<ContratoCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
