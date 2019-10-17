import { Injectable } from '@angular/core';
import {Statbox} from '../components/statbox/statbox.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Dashboardv1Service {

  urlDataStatBox = 'assets/data/dashboardv1/statboxexample.json';

  constructor(private http: HttpClient) {}

  public loadStatBoxes(): Observable<Statbox[]> {
    return this.http.get<Statbox[]>(this.urlDataStatBox);
  }
}
