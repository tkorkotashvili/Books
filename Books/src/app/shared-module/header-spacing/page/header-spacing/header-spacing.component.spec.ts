import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSpacingComponent } from './header-spacing.component';

describe('HeaderSpacingComponent', () => {
  let component: HeaderSpacingComponent;
  let fixture: ComponentFixture<HeaderSpacingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSpacingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSpacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
