import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductViewerComponent } from './product-viewer/product-viewer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'Main Viewer', pathMatch: 'full' },
  { path: 'Main Viewer', component: MainPageComponent },
  { path: 'Main Viewer/Product Viewer/:id', component: ProductViewerComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
