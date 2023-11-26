import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpTestComponent } from './gmp-test.component';

describe('GmpTestComponent', () => {
  let component: GmpTestComponent;
  let fixture: ComponentFixture<GmpTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
