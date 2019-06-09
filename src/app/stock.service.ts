import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private url = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  public addStock(item) {
    return this.http.post(`${this.url}/addItem`, item)
      .subscribe(res => console.log('done adding'));
  }

  public getstock() {
    return this.http.get(`${this.url}/getitems`);      //returning without an stock item interface
  }

  public getfinisheditems() {
    return this.http.get(`${this.url}/getfinisheditems`);
  }

  public deletestock(id) {
    return this.http.delete(`${this.url}/deletestock/${id}`);
  }

  public updatestock(id, amount) {
    const obj = {
      availableAmount: amount,
    };
    return this.http.put(`${this.url}/updatestock/${id}`, obj)
      .subscribe(res => console.log("Done updating"));
  }

  public updateItemInfo(id, item) {
    return this.http.put(`${this.url}/updateiteminfo/${id}`, item)
      .subscribe(res => console.log("Done updating item info"))
  }

}
