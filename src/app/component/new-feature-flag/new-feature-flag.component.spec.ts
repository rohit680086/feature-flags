import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeatureFlagComponent } from './new-feature-flag.component';

describe('NewFeatureFlagComponent', () => {
  let component: NewFeatureFlagComponent;
  let fixture: ComponentFixture<NewFeatureFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFeatureFlagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewFeatureFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
