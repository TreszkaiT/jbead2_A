import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaNewComponent } from './socialmedia-new.component';

describe('SocialmediaNewComponent', () => {
  let component: SocialmediaNewComponent;
  let fixture: ComponentFixture<SocialmediaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediaNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmediaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
