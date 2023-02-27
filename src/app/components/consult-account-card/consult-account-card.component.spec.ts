import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultAccountCardComponent } from './consult-account-card.component';

describe('ConsultAccountCardComponent', () => {
  let component: ConsultAccountCardComponent;
  let fixture: ComponentFixture<ConsultAccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultAccountCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultAccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
