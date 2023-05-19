import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaEditComponent } from './socialmedia-edit.component';

describe('SocialmediaEditComponent', () => {
  let component: SocialmediaEditComponent;
  let fixture: ComponentFixture<SocialmediaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmediaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
