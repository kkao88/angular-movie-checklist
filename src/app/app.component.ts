import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {}

  ngOnInit() {
    //let year = this.route.snapshot.paramMap.get('id');
    //console.log('year', year);
/*
    let that = this;
    this.movies$ = this.route.paramMap
      .switchMap(function(params){
        console.log('id', params.get('id'));
        return that.movieService.getMoviesByYear(params.get('id'));
      }
    ).toPromise().then(function(resp){
        console.log('resp', resp);
      });
    //this.movies = this.movieService.getMoviesByYear(year);*/
  }

}
