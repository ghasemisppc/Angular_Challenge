import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor() {}
    isLoadingQueue = [];

    isLoading$ = new BehaviorSubject<boolean>(false);
    isNavigating$ = new BehaviorSubject<boolean>(false);

    showProgressSpinner() {
        this.isLoadingQueue.push('');
        this.isLoading$.next(this.isLoadingQueue.length > 0);
    }

    hideProgressSpinner() {
        this.isLoadingQueue.pop();
        this.isLoading$.next(this.isLoadingQueue.length > 0);
    }

    showNavSpinner() {
        this.isNavigating$.next(true);
    }

    hideNavSpinner() {
        this.isNavigating$.next(false);
    }
}
