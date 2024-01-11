import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private httpClient: HttpClient = inject(HttpClient);
  private _url: string = `${environment.backendUrl}/item`;

  constructor() { }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(`${this._url}/filter=`);
  }

  addItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this._url, item);
  }
  
}
