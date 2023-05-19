import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherskillNewComponent } from './otherskill-new.component';

describe('OtherskillNewComponent', () => {
  let component: OtherskillNewComponent;
  let fixture: ComponentFixture<OtherskillNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherskillNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherskillNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
