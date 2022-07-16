import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProgressSpinnerComponent } from './app-progress-spinner.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('AppProgressSpinnerComponent', () => {
  let component: AppProgressSpinnerComponent;
  let fixture: ComponentFixture<AppProgressSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [ AppProgressSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
