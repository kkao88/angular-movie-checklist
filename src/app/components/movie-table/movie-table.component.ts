import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent implements OnInit {
  @Input() movies;

  constructor() { }

  loadSeenMovies() {
    this.movies.forEach(function(movie) {
      if (localStorage.getItem(movie.name)){
        movie.seen = true;
      }
    });
  }

  ngOnInit() {
    this.loadSeenMovies();
  }

  ngOnChanges() {
    this.loadSeenMovies();
  }

  toggleSeen(movie){
    if (localStorage.getItem(movie.name)){
      movie.seen = false;
      localStorage.removeItem(movie.name);
    }
    else {
      movie.seen = true;
      localStorage.setItem(movie.name, 'true');
    }
  }
}
