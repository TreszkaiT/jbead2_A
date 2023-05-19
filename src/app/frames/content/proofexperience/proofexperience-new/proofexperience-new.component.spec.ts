import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofexperienceNewComponent } from './proofexperience-new.component';

describe('ProofexperienceNewComponent', () => {
  let component: ProofexperienceNewComponent;
  let fixture: ComponentFixture<ProofexperienceNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofexperienceNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofexperienceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
