import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorConfiguracaoComponent } from './gerenciador-configuracao.component';

describe('GerenciadorConfiguracaoComponent', () => {
  let component: GerenciadorConfiguracaoComponent;
  let fixture: ComponentFixture<GerenciadorConfiguracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciadorConfiguracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadorConfiguracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
