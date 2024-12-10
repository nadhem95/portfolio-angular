import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadhemHazemComponent } from './nadhem.hazem.component';

describe('NadhemHazemComponent', () => {
  let component: NadhemHazemComponent;
  let fixture: ComponentFixture<NadhemHazemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NadhemHazemComponent]
    });
    fixture = TestBed.createComponent(NadhemHazemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
