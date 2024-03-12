import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasktopComponent } from './dasktop.component';

describe('DasktopComponent', () => {
  let component: DasktopComponent;
  let fixture: ComponentFixture<DasktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasktopComponent]
    });
    fixture = TestBed.createComponent(DasktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
