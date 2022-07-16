import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-app-progress-spinner',
  templateUrl: './app-progress-spinner.component.html',
  styleUrls: ['./app-progress-spinner.component.scss']
})
export class AppProgressSpinnerComponent implements OnInit {

  isLoading$: Observable<boolean>;
  isNavigating$: Observable<boolean>;

  constructor(private service: ProgressService) { }

  ngOnInit() {
    this.isLoading$ = this.service.isLoading$;
    this.isNavigating$ = this.service.isNavigating$;
  }

}
