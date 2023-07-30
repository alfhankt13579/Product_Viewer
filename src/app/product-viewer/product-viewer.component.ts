import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-viewer',
  templateUrl: './product-viewer.component.html',
  styleUrls: ['./product-viewer.component.css'],
})
export class ProductViewerComponent implements OnInit {
  
  viewId: any = '';

  product: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      // console.log(data);
      // console.log(data.id);
      this.viewId = data.id;

      this.api
        .fetchDataFromApiAndViewInProductViewer(this.viewId)
        .subscribe((result: any) => {
          // console.log(result);
          this.product = result;
        });
    });
  }
}
