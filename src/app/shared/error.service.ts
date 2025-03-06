import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  _error: Subject<Error> = new Subject<Error>();

  error = this._error;

  showError(message: string) {
    console.log(message);
    this._error.next(new Error(message));
  }

  clearError() {
    this._error.next(null);
  }
}
