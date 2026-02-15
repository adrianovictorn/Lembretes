import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LembreteCard } from './lembrete-card';

describe('LembreteCard', () => {
  let component: LembreteCard;
  let fixture: ComponentFixture<LembreteCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LembreteCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LembreteCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
