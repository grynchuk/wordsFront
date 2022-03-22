import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDescriptionComponent } from './text-description.component';

describe('TextDescriptionComponent', () => {
  let component: TextDescriptionComponent;
  let fixture: ComponentFixture<TextDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
