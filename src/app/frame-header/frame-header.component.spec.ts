import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameHeaderComponent } from './frame-header.component';

describe('FrameHeaderComponent', () => {
  let component: FrameHeaderComponent;
  let fixture: ComponentFixture<FrameHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
