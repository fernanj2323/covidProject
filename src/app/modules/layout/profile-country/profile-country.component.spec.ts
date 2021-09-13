import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCountryComponent } from './profile-country.component';

describe('ProfileCountryComponent', () => {
  let component: ProfileCountryComponent;
  let fixture: ComponentFixture<ProfileCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
