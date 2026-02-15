import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LembreteForm } from './lembrete-form';

describe('LembreteForm', () => {
  let component: LembreteForm;
  let fixture: ComponentFixture<LembreteForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LembreteForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LembreteForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
