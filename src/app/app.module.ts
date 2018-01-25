import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { MyProfileComponent } from './myprofile/myprofile.component';
import { RequestComponent } from './request/request.component';
import { FindComponent } from './find/find.component';
import { SearchComponent } from './search/search.component';
import { SearchagentComponent } from './searchagent/searchagent.component';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
  /* compontens, directives, pipes etc. of THIS module */
  declarations: [
    AppComponent,
    DashboardComponent, OverviewComponent, MyProfileComponent, RequestComponent,
    FindComponent, SearchComponent, SearchagentComponent, FavouritesComponent
  ],

  /* other modules. Everything of those imported modules is available to THIS modules declarations */
  imports: [
    BrowserModule, RoutingModule
  ],

  /* Components, directives, and pipes visible to modules that import THIS module. */
  exports: [],

  /* dependency injection providers */
  providers: [],

  /* components to be bootstrapped */
  bootstrap: [AppComponent]
})
export class AppModule { }
