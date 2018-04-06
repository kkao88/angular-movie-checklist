import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTableComponent } from './movie-table.component';

describe('MovieTableComponent', () => {
  let component: MovieTableComponent;
  let fixture: ComponentFixture<MovieTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTableComponent);
    component = fixture.componentInstance;
    component.movies = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
