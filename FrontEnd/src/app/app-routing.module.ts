import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';

const routes: Routes = [
  {
    path: '/',
    redirectTo: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'viewcourses',
    component: ViewcoursesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
