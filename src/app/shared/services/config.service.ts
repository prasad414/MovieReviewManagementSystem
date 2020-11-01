import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigModel } from '@shared/types';

declare var appConfig;

@Injectable({ providedIn: 'root' })
export class AppConfig {

    constructor(private http: HttpClient
        // , private authService: AuthenticationService
    ) {
        this.config = appConfig;
        this.apiUrl = this.config.apiUrl;
        this.authUrl = this.config.authUrl;
    }

    apiUrl: string;
    authUrl: string;

    config: AppConfigModel;

    getConfigs() {
        return this.config;
    }

    getApiPath(controllerName: string, methodName: string, params: any = []) {
        let queryString = '';
        if (params.length > 0) {
            queryString = params.join('/');
        }
        return `${this.config.apiUrl}/${controllerName}/${methodName}/${queryString}`;
    }

}
