import {  Component, OnInit } from '@angular/core';
import { GithubListService } from '../../services/github-list.service';
import {  pluck } from "rxjs/operators";
import { GithubListModel } from '../../models/github-list.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-github-list-content',
  templateUrl: './github-list-content.component.html',
  styleUrls: ['./github-list-content.component.scss']
})
export class GithubListContentComponent implements OnInit {

  list: BehaviorSubject<GithubListModel[]> = new BehaviorSubject<GithubListModel[]>([]);

  constructor(private githubListSrvc: GithubListService) {}

  ngOnInit(): void {
    this.githubListSrvc.getList().pipe(pluck('items')).subscribe(res=>{
      this.list.next(res)
    });
  }

  onScroll() {
    this.githubListSrvc.onScroll().pipe(pluck('items')).subscribe(res=>{
      this.list.next([...this.list.value,...res])
    });
  }
}
