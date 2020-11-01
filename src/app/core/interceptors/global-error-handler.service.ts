import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor() { }

  // function to catch all errors globally
  handleError(error) {
    console.error('uierror ', error);

    // NOTE: use below line if wants to rethrow
    throw error;
  }
}
