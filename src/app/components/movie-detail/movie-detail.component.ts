import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieName;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let that = this;
    this.route.params.subscribe( function(params){
      that.movieName = params.movieName;
    } );
  }

}
