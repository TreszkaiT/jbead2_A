import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageappNewComponent } from './messageapp-new.component';

describe('MessageappNewComponent', () => {
  let component: MessageappNewComponent;
  let fixture: ComponentFixture<MessageappNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageappNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageappNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
