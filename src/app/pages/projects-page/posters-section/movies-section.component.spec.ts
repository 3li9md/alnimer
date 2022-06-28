import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostersSectionComponent } from './posters-section.component';

describe('PostersSectionComponent', () => {
  let component: PostersSectionComponent;
  let fixture: ComponentFixture<PostersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostersSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
