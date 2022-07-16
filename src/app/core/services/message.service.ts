import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    constructor(private snackBar: MatSnackBar) { }

    showOkMessage(message) {
        this.snackBar.open(message, '', {
            duration: 5000,
            panelClass: 'crx-alert-success'
        });
    }

    showErrorMessage(message = 'Error. Please try again.') {
        this.snackBar.open(message, '', {
            duration: 5000,
            panelClass: 'crx-alert-danger'
        });
    }

    showNoPermissionMessage() {
        this.snackBar.open('You do not have sufficient permission.', '', {
            duration: 2000,
            panelClass: 'crx-alert-danger'
        });
    }

}


