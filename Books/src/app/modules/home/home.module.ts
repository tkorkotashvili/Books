import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BookCardComponent } from './book-card/book-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderSpacingModule } from 'src/app/shared-module/header-spacing/header-spacing.module';
@NgModule({
  declarations: [HomeComponent, BookCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HeaderSpacingModule,
  ],
})
export class HomeModule {}
