import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvUploadComponent } from './csv-upload.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'CSV Upload',
    },
    children: [
      {
        path: '',
        redirectTo: 'upload',
      },
      {
        path: 'upload',
        component: CsvUploadComponent,
        data: {
          title: 'CSV Upload',
        },
      },
      // {
      //   path: 'typography',
      //   component: TypographyComponent,
      //   data: {
      //     title: 'Typography',
      //   },
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsvUploadRoutingModule { }
