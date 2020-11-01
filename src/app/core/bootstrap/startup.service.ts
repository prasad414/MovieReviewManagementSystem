import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MenuService } from './menu.service';
import { SettingsService } from './settings.service';
import { LocalStorageService } from '@shared';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  constructor(
    private menu: MenuService,
    private http: HttpClient,
    private settings: SettingsService,
    private localStrg: LocalStorageService,
  ) { }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get('assets/data/menu.json?_t=' + Date.now())
        .pipe(
          catchError(res => {
            resolve();
            return throwError(res);
          })
        )
        .subscribe(
          (res: any) => {
            this.menu.recursMenuForTranslation(res.menu, 'menu');
            this.menu.set(res.menu);

            const user = this.localStrg.get('usr');
            if (user) {
              this.settings.setUser({
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
              });
            }
          },
          () => {
            reject();
          },
          () => {
            resolve();
          }
        );
    });
  }
}
