import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchDataFromApi() {
    return this.http.get('https://dummyjson.com/products');
  }

  fetchDataFromApiAndViewInProductViewer(viewId:any) {
    return this.http.get(`https://dummyjson.com/products/${viewId}`);
  }

  
}
