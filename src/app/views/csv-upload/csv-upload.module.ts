import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsvUploadRoutingModule } from './csv-upload-routing.module';
import { CsvUploadComponent } from './csv-upload.component';


@NgModule({
  declarations: [
    CsvUploadComponent
  ],
  imports: [
    CommonModule,
    CsvUploadRoutingModule
  ]
})
export class CsvUploadModule { }
