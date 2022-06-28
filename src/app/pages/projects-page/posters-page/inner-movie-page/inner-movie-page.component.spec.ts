import { ComponentFixture, TestBed } from '@angular/core/testing';
import {InnerMoviePageComponent} from './inner-movie-page.component'

describe('InnerMoviePageComponent', () => {
  let component: InnerMoviePageComponent;
  let fixture: ComponentFixture<InnerMoviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerMoviePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
