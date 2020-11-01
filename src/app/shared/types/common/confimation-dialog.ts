export class ConfirmationDialogInput {
    message: string = 'Are you sure you want to delete this record?';
    title: string = 'Confirmation';
    template: ConfirmationTemplate = 'default';
    yesButtonText: string = 'Yes';
    noButtonText: string = 'No';
}

export declare type ConfirmationTemplate = 'default' | 'delete-confirmation';