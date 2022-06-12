import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayphotoComponent } from './displayphoto.component';

describe('DisplayphotoComponent', () => {
  let component: DisplayphotoComponent;
  let fixture: ComponentFixture<DisplayphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayphotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
