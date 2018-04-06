import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';

import {MovieService} from './services/movie.service';
import { MovieTableComponent } from './components/movie-table/movie-table.component';
import { BaseComponent } from './components/base/base.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const appRoutes: Routes = [
  {path: 'year', component: BaseComponent},
  { path: 'year/:id',      component: BaseComponent },
  { path: 'details/:movieName', component: MovieDetailComponent}
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MovieTableComponent,
    BaseComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
