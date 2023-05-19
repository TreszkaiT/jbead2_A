import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherskillEditComponent } from './otherskill-edit.component';

describe('OtherskillEditComponent', () => {
  let component: OtherskillEditComponent;
  let fixture: ComponentFixture<OtherskillEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherskillEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherskillEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
