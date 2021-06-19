import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class GithubListService {

  private page:number = 1;
  private relativeDate:string = '22-11-2017';
  private relativeDateFormat:string = 'DD-MM-YYYY';

  constructor(private layoutSrvc:LayoutService,
    private http:HttpClient) {

  }

  onScroll(): Observable<any>{
    this.incrementPage();
    return this.getList()
  }

  incrementPage(){
    this.page++;
  }

  lastThirtyDays(): string{
    let today_30 = moment(this.relativeDate,this.relativeDateFormat).subtract(31, 'days').toDate();

    return today_30.getFullYear()+'-'+(today_30.getMonth()+1)+'-'+today_30.getDate();
  }

  getList() : Observable<any>{
    return this.http.get(`https://api.github.com/search/repositories?q=created:>${this.lastThirtyDays()}&sort=stars&order=desc&page=${this.page}`)

  }

}
