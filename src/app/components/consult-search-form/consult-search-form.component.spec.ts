import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultSearchFormComponent } from './consult-search-form.component';

describe('ConsultSearchFormComponent', () => {
  let component: ConsultSearchFormComponent;
  let fixture: ComponentFixture<ConsultSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultSearchFormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
