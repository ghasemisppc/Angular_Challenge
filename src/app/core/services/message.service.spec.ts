import { MessageService } from './message.service';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('MessageService', () => {
    let service: MessageService;
    let snackBar: MatSnackBar;

    const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MessageService,
                { provide: MatSnackBar, useValue: snackBarSpy }
            ]
        });
        service = TestBed.get(MessageService);
        snackBar = TestBed.get(MatSnackBar);
    });

    it('should show error message if message is not passed', () => {
        service.showErrorMessage();
        expect(snackBar.open).toHaveBeenCalledWith(
            'Error. Please try again.',
            '',
            {duration: 5000, panelClass: 'crx-alert-danger' }
        );
    });

    it('should show Ok message if showOkMessage is called', () => {
        service.showOkMessage('Ok');
        expect(snackBar.open).toHaveBeenCalled();
    });

    it('should show no permission message if showNoPermissionMessage is called', () => {
        service.showNoPermissionMessage();
        expect(snackBar.open).toHaveBeenCalled();
    });
});
