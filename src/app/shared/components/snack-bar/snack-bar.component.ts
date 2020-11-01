import { Component, ChangeDetectionStrategy, Inject, ViewEncapsulation, OnInit } from '@angular/core';
import { MatSnackBarData } from './snack-bar.model';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SnackBarComponent implements OnInit {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public matSnackBarData: MatSnackBarData,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    console.log(this.matSnackBarData);
  }

  closeSnackBar() {
    this.snackBar.dismiss();
  }

}
