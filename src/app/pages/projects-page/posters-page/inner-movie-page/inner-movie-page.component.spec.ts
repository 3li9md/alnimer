import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerPosterPageComponent } from './inner-poster-page.component';

describe('InnerPosterPageComponent', () => {
  let component: InnerPosterPageComponent;
  let fixture: ComponentFixture<InnerPosterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerPosterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerPosterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
