import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofexperienceComponent } from './proofexperience.component';

describe('ProofexperienceComponent', () => {
  let component: ProofexperienceComponent;
  let fixture: ComponentFixture<ProofexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofexperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
