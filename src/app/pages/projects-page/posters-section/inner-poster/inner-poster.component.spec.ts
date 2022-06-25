import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerPosterComponent } from './inner-poster.component';

describe('InnerPosterComponent', () => {
  let component: InnerPosterComponent;
  let fixture: ComponentFixture<InnerPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerPosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
