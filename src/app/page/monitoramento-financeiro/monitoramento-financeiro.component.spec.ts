import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoramentoFinanceiroComponent } from './monitoramento-financeiro.component';

describe('MonitoramentoFinanceiroComponent', () => {
  let component: MonitoramentoFinanceiroComponent;
  let fixture: ComponentFixture<MonitoramentoFinanceiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoramentoFinanceiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoramentoFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
