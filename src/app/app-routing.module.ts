import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubListContentComponent } from './modules/github-list/components/github-list-content/github-list-content.component';

const routes: Routes = [
  {path:'',component: GithubListContentComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
