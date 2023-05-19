import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNewComponent } from './phone-new.component';

describe('PhoneNewComponent', () => {
  let component: PhoneNewComponent;
  let fixture: ComponentFixture<PhoneNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
