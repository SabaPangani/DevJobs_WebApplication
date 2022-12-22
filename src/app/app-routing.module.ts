import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'details/:name', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
