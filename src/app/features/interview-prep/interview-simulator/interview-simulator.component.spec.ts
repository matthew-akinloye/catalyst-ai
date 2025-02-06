import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewSimulatorComponent } from './interview-simulator.component';

describe('InterviewSimulatorComponent', () => {
  let component: InterviewSimulatorComponent;
  let fixture: ComponentFixture<InterviewSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterviewSimulatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
