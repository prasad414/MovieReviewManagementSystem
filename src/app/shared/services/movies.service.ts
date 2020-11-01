import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './config.service';

@Injectable({ providedIn: 'root' })
export class MoviesService {

    constructor(
        private appConfig: AppConfig,
        private http: HttpClient) {

    }


    // This will come from config file
    v3ApiUrl: string = "https://api.themoviedb.org/3/";
    v4ApiUrl: string = "https://api.themoviedb.org/4/";
    apiKey: string = "383152e8c1903c8e59107fbfe3764b64";
    accessToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDQyNDEzNTMsInN1YiI6IjVmOWM0MjE5MjljNjI2MDAzNzU3YzU3NCIsImp0aSI6IjI1MjAxODUiLCJhdWQiOiIzODMxNTJlOGMxOTAzYzhlNTkxMDdmYmZlMzc2NGI2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxfQ.QTOo0cNEnQcVmLAm-gCwW40oenUnQD_tyRlJsu6lRlg';

    getFilterTypeList() {
        return this.http.get("assets/data/filter-type-list.json");
    }

    // getMoviesList() {
    //     return this.http.get("assets/data/movie-list.json");
    // }

    getConfiguration() {
        const url: string = `https://api.themoviedb.org/3/configuration?api_key=${this.apiKey}`;
        return this.http.get(url);
    }

    getMovieList() {
        const url: string = `${this.v4ApiUrl}list/1?page=1&api_key=${this.apiKey}&sort_by=title.asc`;
        return this.http.get(url);
    }

    getMovieDetail(movieId: string) {
        const url: string = `${this.v3ApiUrl}movie/${movieId}?api_key=${this.apiKey}&language=en-US`
        return this.http.get(url);
    }

    getMovieListByListId(listId: number, page: number = 1) {
        const url: string = `${this.v3ApiUrl}list/${listId}?page=${page}&api_key=${this.apiKey}&sort_by=title.asc`;
        return this.http.get(url);
    }

    // getJsonFile(fileName: string) {
    //     return this.http.get("assets/data/movies/" + fileName);
    // }
}
