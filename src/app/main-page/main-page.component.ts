import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  dataArray: any = [];

  products: any = [];

  searchKey: any = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.fetchDataFromApi();
  }

  fetchDataFromApi() {
    this.api.fetchDataFromApi().subscribe((data: any) => {
      this.dataArray = Object.values(data);

      // console.log(this.dataArray[0]);

      this.products = this.dataArray[0];
    });
  }
  search(event: any) {
    console.log(event.target.value);

    this.searchKey = event.target.value;
  }
}
