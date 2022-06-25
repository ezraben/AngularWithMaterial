import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModuleModule } from './users-module/users-module.module';
import { NycComponent } from './components/nyc/nyc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [AppComponent, NycComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModuleModule,
    BrowserAnimationsModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
