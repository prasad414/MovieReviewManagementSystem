// tslint:disable: quotemark
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackBarComponent } from '@shared/components/snack-bar/snack-bar.component';
import { MatSnackBarType } from '@shared/components/snack-bar/snack-bar.model';
import { LuMessage } from '@shared/consts';

@Injectable({ providedIn: 'root' })
export class SnackBarService {

    constructor(private snackBar: MatSnackBar) {
    }

    showSnackBar(message: string, action: string, duration: number = 5) {
        const matSnackBarConfig = new MatSnackBarConfig();
        matSnackBarConfig.horizontalPosition = 'center';
        matSnackBarConfig.verticalPosition = 'top';
        matSnackBarConfig.duration = duration * 1000;
        matSnackBarConfig.panelClass = 'deafult-snackbar';
        this.snackBar.open(message, action, matSnackBarConfig);
    }

    showSuccessSnackBar(message: string, action: string, duration: number = 5) {
        const matSnackBarConfig = new MatSnackBarConfig();
        matSnackBarConfig.horizontalPosition = 'center';
        matSnackBarConfig.verticalPosition = 'top';
        matSnackBarConfig.duration = duration * 1000;
        matSnackBarConfig.panelClass = 'success-snackbar';
        this.snackBar.open(message, action, matSnackBarConfig);
    }

    showFailureSnackBar(message: string, action: string, duration: number = 5) {
        const matSnackBarConfig = new MatSnackBarConfig();
        matSnackBarConfig.horizontalPosition = 'center';
        matSnackBarConfig.verticalPosition = 'top';
        matSnackBarConfig.duration = duration * 1000;
        matSnackBarConfig.panelClass = 'failure-snackbar';
        this.snackBar.open(message, action, matSnackBarConfig);
    }

    showSnackBarComponent(title: string, message: string, duration: number = 10, snackBarType: MatSnackBarType = 'success', hp: MatSnackBarHorizontalPosition = 'right', vp: MatSnackBarVerticalPosition = 'top') {
        const matSnackBarConfig = new MatSnackBarConfig();
        matSnackBarConfig.data = { title, message, snackBarType };
        matSnackBarConfig.horizontalPosition = hp;
        matSnackBarConfig.verticalPosition = vp;
        matSnackBarConfig.duration = duration * 1000;
        matSnackBarConfig.panelClass = 'app-snackbar';
        this.snackBar.openFromComponent(SnackBarComponent, matSnackBarConfig);
    }

}