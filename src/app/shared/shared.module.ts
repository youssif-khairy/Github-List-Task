import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



const ImportExportModules = [
  PerfectScrollbarModule,
  HttpClientModule,
  InfiniteScrollModule
]

const DeclarationExports = [

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ImportExportModules,
    DeclarationExports
  ],
  exports:[
    ImportExportModules,
    DeclarationExports
  ]
})
export class SharedModule { }
