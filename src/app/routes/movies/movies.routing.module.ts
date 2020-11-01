import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMoviesComponent } from './view-movies/view-movies.component';

const routes: Routes = [
    { path: '', redirectTo: 'view-movies', pathMatch: 'full' },
    { path: 'view-movies', component: ViewMoviesComponent, data: { title: 'View Movies' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MoviesRoutingModule { }
