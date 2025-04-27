import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnValuePipe } from './pipes/column-value.pipe';



@NgModule({
  declarations: [
    ColumnValuePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColumnValuePipe
  ]
})
export class TableModule { }
