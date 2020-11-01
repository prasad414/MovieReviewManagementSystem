import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from '@shared';
import { MoviesService } from '@shared/services/movies.service';
import { MovieDetailDialogComponent } from './movie-detail-dialog/movie-detail-dialog.component';

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.scss']
})
export class ViewMoviesComponent implements OnInit {

  filterTypeList: Array<any> = [];
  moviesList: any = [];
  moreOptionMenuItems: Array<any> = [
    { id: 1, name: 'Move To Watch List', icon: 'watch_later', class: 'watch_later' },
    { id: 2, name: 'Mark As Favourite', icon: 'favorite_border', class: 'mark-as-fav' },
    { id: 3, name: 'Mark As Watched', icon: 'check_circle_outline', class: 'mark-as-watched' },
    { id: 4, name: 'Mark As Reviewed', icon: 'star_border', class: 'mark-as-reviewed' },
  ];

  constructor(
    private moviesService: MoviesService,
    private dialog: MatDialog,
    private localStrg: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.getFilterTypeList();

    this.getConfiguration();
    this.getMovieList();
  }

  filteredMoviewList: Array<any> = [];
  selectedTabIndex: number = 0;
  selectedTabId: number = 1;
  onTabChanged(selectedTabIndex: number) {
    this.selectedTabIndex = selectedTabIndex;
    const selectedFilter = this.filterTypeList[this.selectedTabIndex];
    this.selectedTabId = selectedFilter.tabId;

    const favMovieIdList = this.getList('FavList');
    const watchedMovieIdList = this.getList('WatchedList');
    const reviewedMovieIdList = this.getList('ReviewedList');
    const filteredMovieIdList = [...favMovieIdList, ...watchedMovieIdList, ...reviewedMovieIdList];
    // this.filterTypeList.forEach(filterType => {
    //   let movieList = [];
    //   switch (filterType.id) {
    //     case MenuOptionEnum.WatchLater:
    //       movieList = this.moviesList.filter(x => filteredMovieIdList.indexOf(x.id) < 0);
    //       filterType.count = movieList.length;
    //       break;
    //     case MenuOptionEnum.MarkAsFavourite:
    //       movieList = this.moviesList.filter(x => favMovieIdList.indexOf(x.id) >= 0);
    //       filterType.count = movieList.length;
    //       break;
    //     case MenuOptionEnum.MarkAsWatched:
    //       movieList = this.moviesList.filter(x => watchedMovieIdList.indexOf(x.id) >= 0);
    //       filterType.count = movieList.length;
    //       break;
    //     case MenuOptionEnum.MarkAsReviewed:
    //       movieList = this.moviesList.filter(x => reviewedMovieIdList.indexOf(x.id) >= 0);
    //       filterType.count = movieList.length;
    //       break;
    //     default:
    //       break;
    //   }
    // });

    switch (this.selectedTabId) {
      case MenuOptionEnum.WatchLater:
        // const filteredMovieIdList = [...this.getList('FavList'), ...this.getList('WatchedList'), ...this.getList('ReviewedList')];
        this.filteredMoviewList = this.moviesList.filter(x => filteredMovieIdList.indexOf(x.id) < 0);
        break;
      case MenuOptionEnum.MarkAsFavourite:
        // const favMovieIdList = this.getList('FavList');
        this.filteredMoviewList = this.moviesList.filter(x => favMovieIdList.indexOf(x.id) >= 0);
        break;
      case MenuOptionEnum.MarkAsWatched:
        // const watchedMovieIdList = this.getList('WatchedList');
        this.filteredMoviewList = this.moviesList.filter(x => watchedMovieIdList.indexOf(x.id) >= 0);
        break;
      case MenuOptionEnum.MarkAsReviewed:
        // const reviewedMovieIdList = this.getList('ReviewedList');
        this.filteredMoviewList = this.moviesList.filter(x => reviewedMovieIdList.indexOf(x.id) >= 0);
        break;
      default:
        break;
    }
    this.updateFilterCount();
  }

  updateFilterCount() {
    const favMovieIdList = this.getList('FavList');
    const watchedMovieIdList = this.getList('WatchedList');
    const reviewedMovieIdList = this.getList('ReviewedList');
    const filteredMovieIdList = [...favMovieIdList, ...watchedMovieIdList, ...reviewedMovieIdList];
    this.filterTypeList.forEach(filterType => {
      let movieList = [];
      switch (filterType.tabId) {
        case MenuOptionEnum.WatchLater:
          movieList = this.moviesList.filter(x => filteredMovieIdList.indexOf(x.id) < 0);
          filterType.count = movieList.length;
          break;
        case MenuOptionEnum.MarkAsFavourite:
          movieList = this.moviesList.filter(x => favMovieIdList.indexOf(x.id) >= 0);
          filterType.count = movieList.length;
          break;
        case MenuOptionEnum.MarkAsWatched:
          movieList = this.moviesList.filter(x => watchedMovieIdList.indexOf(x.id) >= 0);
          filterType.count = movieList.length;
          break;
        case MenuOptionEnum.MarkAsReviewed:
          movieList = this.moviesList.filter(x => reviewedMovieIdList.indexOf(x.id) >= 0);
          filterType.count = movieList.length;
          break;
        default:
          break;
      }
    });
  }

  getFilterTypeList() {
    this.moviesService.getFilterTypeList()
      .subscribe((filterTypeList: any) => {
        this.filterTypeList = filterTypeList;
      }, error => {
        console.error('error', error);
      });
  }

  baseUrl: string = '';
  getConfiguration() {
    this.moviesService.getConfiguration()
      .subscribe((configuration: any) => {
        console.log('configuration', configuration);
        this.baseUrl = configuration.images.base_url;
      }, error => {
        console.error('error', error);
      });
  }

  getMovieList() {
    this.moviesService.getMovieList()
      .subscribe((moivesInfo: any) => {
        console.log('moviesList', moivesInfo);
        this.moviesList = [];
        moivesInfo.results.forEach(movie => {
          this.moviesList.push({
            id: movie.id,
            title: movie.title,
            vote_count: movie.vote_count,
            vote_average: movie.vote_average,
            posterImg: this.baseUrl + '/w185' + movie.poster_path,
            overview: movie.overview,
          });
        });
        this.filteredMoviewList = this.moviesList;
        this.updateFilterCount();
      }, error => {
        console.error('error', error);
      });
  }

  getMovieDetail(moivesInfo: any) {
    this.moviesService.getMovieDetail(moivesInfo.id)
      .subscribe((movieDetail: any) => {
        console.log('movieDetail', movieDetail);
        movieDetail.posterImg = moivesInfo.posterImg;
        const dialogRef = this.dialog.open(MovieDetailDialogComponent, {
          panelClass: 'movie-detail-dialog',
          data: movieDetail,
        });

      }, error => {
        console.error('error', error);
      });
  }

  selectedMovie: any = null;
  onMoreOptionAction(option: any) {
    this.removeFromAll();
    switch (option.id) {
      case MenuOptionEnum.WatchLater:
        this.removeFromAll();
        break;
      case MenuOptionEnum.MarkAsFavourite:
        this.addToList('FavList');
        break;
      case MenuOptionEnum.MarkAsWatched:
        this.addToList('WatchedList');
        break;
      case MenuOptionEnum.MarkAsReviewed:
        this.addToList('ReviewedList');
        break;
      default:
        break;
    }
    this.onTabChanged(this.selectedTabIndex);
  }

  removeFromAll() {
    this.removeFromList('FavList');
    this.removeFromList('WatchedList');
    this.removeFromList('ReviewedList');
  }

  removeFromList(itemName: string) {
    let currentList = this.localStrg.get(itemName);
    if (currentList == null) currentList = [];
    const removeIndex: number = currentList.indexOf(this.selectedMovie.id);
    if (removeIndex >= 0) currentList.splice(removeIndex, 1);
    this.localStrg.set(itemName, currentList);
  }

  addToList(itemName: string) {
    let currentList = this.localStrg.get(itemName);
    if (currentList == null) currentList = [];
    if (currentList.indexOf(this.selectedMovie.id) < 0)
      currentList.push(this.selectedMovie.id);
    this.localStrg.set(itemName, currentList);
  }

  getList(itemName: string) {
    let currentList = this.localStrg.get(itemName);
    if (currentList == null) currentList = [];
    return currentList;
  }


}

export enum MenuOptionEnum {
  WatchLater = 1,
  MarkAsFavourite = 2,
  MarkAsWatched = 3,
  MarkAsReviewed = 4,
}