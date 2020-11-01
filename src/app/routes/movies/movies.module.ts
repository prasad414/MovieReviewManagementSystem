import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MoviesRoutingModule } from './movies.routing.module';
import { ViewMoviesComponent } from './view-movies/view-movies.component';

import { MovieDetailDialogComponent } from './view-movies/movie-detail-dialog/movie-detail-dialog.component';

const COMPONENTS = [ViewMoviesComponent];
const COMPONENTS_DYNAMIC = [MovieDetailDialogComponent];

@NgModule({
  imports: [SharedModule, MoviesRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class MoviesModule { }
