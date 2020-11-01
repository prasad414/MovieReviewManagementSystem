import { Component, ChangeDetectionStrategy, Inject, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogInput } from '@shared/types/common/confimation-dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ConfirmationDialogComponent implements OnInit {
  constructor(
    private confimationDialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogInput: ConfirmationDialogInput,
  ) {
    // Note : We can pass ConfirmationDialogInput if we want to customize the dialog
    if (this.dialogInput == null) {
      this.dialogInput = new ConfirmationDialogInput();
    }
  }

  ngOnInit() {

  }

  onConfirmationNo() {
    this.confimationDialogRef.close(false);
  }

  onConfirmationYes() {
    this.confimationDialogRef.close(true);
  }

}
