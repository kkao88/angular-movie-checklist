import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {MovieService} from '../../services/movie.service';
import { MovieTableComponent } from '../movie-table/movie-table.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  years = [{id: '2017'}, {id: '2016'}, {id: '2015'}, {id: '2014'}, {id: '2013'}, {id: '2012'}, {id: '2011'}, {id: '2010'}, {id: '2009'},
    {id: '2008'}, {id: '2007'}, {id: '2006'}, {id: '2005'}, {id: '2004'}, {id: '2003'}, {id: '2002'}, {id: '2001'}, {id: '2000'}];
  movies;
  year;
  movies$;

  ngOnInit() {
    let that = this;
    this.route.params.subscribe( function(params){
      that.movies = that.movieService.getMoviesByYear(params.id);
      that.year = that.years.find(function(year){
        return year.id === params.id;
      });
    } );
  }


  changeYear($event, year){
    this.router.navigate([`/year/${year}`]);
  }
}
