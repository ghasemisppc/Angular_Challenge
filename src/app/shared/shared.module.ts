// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Other Modules
import { MaterialModule } from './material/material.module';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Directives
// Containers
// Components
// Pipes

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true },
  ]
})
export class SharedModule {}
