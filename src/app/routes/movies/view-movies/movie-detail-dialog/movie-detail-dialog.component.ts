import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-detail-dialog',
  templateUrl: './movie-detail-dialog.component.html',
  styleUrls: ['./movie-detail-dialog.component.scss']
})
export class MovieDetailDialogComponent implements OnInit {

  constructor(
    private movieDetailDialogRef: MatDialogRef<MovieDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public movieDetail: any,
  ) {
  }

  ngOnInit(): void {
    console.log('movieDetail', this.movieDetail);
  }

  onCloseDialog() {
    this.movieDetailDialogRef.close(null);
  }

}
