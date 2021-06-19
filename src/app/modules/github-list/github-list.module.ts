import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubListContentComponent } from './components/github-list-content/github-list-content.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomDatePipe } from './pipes/custom-date.pipe';



@NgModule({
  declarations: [
    GithubListContentComponent,
    CustomDatePipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GithubListModule { }
