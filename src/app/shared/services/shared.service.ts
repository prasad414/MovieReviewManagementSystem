import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class SharedService {
    constructor() { }

    pageSizeOptions: number[] = [10, 25, 50, 100];
    defaultPageSize = 25;

    loggedInUser: any = {};

}
