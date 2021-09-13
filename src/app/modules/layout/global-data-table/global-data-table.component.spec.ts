import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalDataTableComponent } from './global-data-table.component';

describe('GlobalDataTableComponent', () => {
  let component: GlobalDataTableComponent;
  let fixture: ComponentFixture<GlobalDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
