import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { ContentHeaderComponent } from './layout/content-layout/content-header/content-header.component';
import { ContentFooterComponent } from './layout/content-layout/content-footer/content-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    ContentHeaderComponent,
    ContentFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
