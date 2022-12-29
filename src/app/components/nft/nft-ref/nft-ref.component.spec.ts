import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftRefComponent } from './nft-ref.component';

describe('NftRefComponent', () => {
  let component: NftRefComponent;
  let fixture: ComponentFixture<NftRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
