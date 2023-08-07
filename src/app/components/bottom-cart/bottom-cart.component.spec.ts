import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCartComponent } from './bottom-cart.component';

describe('BottomCartComponent', () => {
  let component: BottomCartComponent;
  let fixture: ComponentFixture<BottomCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomCartComponent]
    });
    fixture = TestBed.createComponent(BottomCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
