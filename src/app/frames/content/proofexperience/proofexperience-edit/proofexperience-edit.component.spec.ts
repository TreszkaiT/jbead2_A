import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofexperienceEditComponent } from './proofexperience-edit.component';

describe('ProofexperienceEditComponent', () => {
  let component: ProofexperienceEditComponent;
  let fixture: ComponentFixture<ProofexperienceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofexperienceEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofexperienceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
