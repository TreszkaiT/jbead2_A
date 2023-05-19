import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherskillComponent } from './otherskill.component';

describe('OtherskillComponent', () => {
  let component: OtherskillComponent;
  let fixture: ComponentFixture<OtherskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
