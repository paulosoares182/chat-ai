import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private search = new BehaviorSubject<string | null>(null);
  search$ = this.search.asObservable();

  updateSearch(query: string) {
    this.search.next(query);
  }
}