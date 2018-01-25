import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { MyProfileComponent } from './myprofile/myprofile.component';
import { RequestComponent } from './request/request.component';
import { FindComponent } from './find/find.component';
import { SearchComponent } from './search/search.component';
import { SearchagentComponent } from './searchagent/searchagent.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent,
    children:[
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'myprofile', component: MyProfileComponent },
      { path: 'request', component: RequestComponent },
    ]
  },
  { path: 'find', component: FindComponent,
    children:[
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'search', component: SearchComponent },
      { path: 'searchagent', component: SearchagentComponent },
      { path: 'favourites', component: FavouritesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
