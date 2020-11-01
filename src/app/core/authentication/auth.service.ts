import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '@shared/services/config.service';
import { UserListParam } from '@shared/types/auth/auth.model';
import { RegisterUser } from '@shared/types/user';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(
        private appConfig: AppConfig,
        private http: HttpClient) { }

    authenticate(login: any) {
        return this.http.post(this.appConfig.authUrl + "Token", login);
    }

    register(registerUser: RegisterUser) {
        return this.http.post(this.appConfig.authUrl + "RegisterUser", registerUser);
    }

    updateUser(registerUser: RegisterUser) {
        return this.http.post(this.appConfig.authUrl + "UpdateUser", registerUser);
    }

    getUsers(userListParam: UserListParam) {
        return this.http.post(this.appConfig.authUrl + "GetUsers", userListParam);
    }

    getUsersByRole(userListParam: UserListParam) {
        return this.http.post(this.appConfig.authUrl + "GetUsersByRole", userListParam);
    }

}
