import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageappEditComponent } from './messageapp-edit.component';

describe('MessageappEditComponent', () => {
  let component: MessageappEditComponent;
  let fixture: ComponentFixture<MessageappEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageappEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageappEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
