import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultUserResultCardComponent } from './consult-user-result-card.component';

describe('ConsultUserResultCardComponent', () => {
  let component: ConsultUserResultCardComponent;
  let fixture: ComponentFixture<ConsultUserResultCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultUserResultCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultUserResultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
