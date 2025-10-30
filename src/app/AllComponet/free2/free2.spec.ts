import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Free2 } from './free2';

describe('Free2', () => {
  let component: Free2;
  let fixture: ComponentFixture<Free2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Free2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Free2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
