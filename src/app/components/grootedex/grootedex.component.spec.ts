import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrootedexComponent } from './grootedex.component';

describe('GrootedexComponent', () => {
  let component: GrootedexComponent;
  let fixture: ComponentFixture<GrootedexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrootedexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrootedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
