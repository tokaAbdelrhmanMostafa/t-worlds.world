import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headertwo } from './headertwo';

describe('Headertwo', () => {
  let component: Headertwo;
  let fixture: ComponentFixture<Headertwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headertwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headertwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
