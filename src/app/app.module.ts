import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LeftSideComponent } from './shared/left-side/left-side.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Dashboardv1Component } from './pages/dashboardv1/dashboardv1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSideComponent,
    FooterComponent,
    Dashboardv1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
