import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureEditComponent } from './picture-edit.component';

describe('PictureEditComponent', () => {
  let component: PictureEditComponent;
  let fixture: ComponentFixture<PictureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
