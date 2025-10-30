import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headerthree } from './headerthree';

describe('Headerthree', () => {
  let component: Headerthree;
  let fixture: ComponentFixture<Headerthree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headerthree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headerthree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
