import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageappComponent } from './messageapp.component';

describe('MessageappComponent', () => {
  let component: MessageappComponent;
  let fixture: ComponentFixture<MessageappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
