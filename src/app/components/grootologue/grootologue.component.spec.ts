import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrootologueComponent } from './grootologue.component';

describe('GrootologueComponent', () => {
  let component: GrootologueComponent;
  let fixture: ComponentFixture<GrootologueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrootologueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrootologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
