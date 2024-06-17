import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BannerComponent } from './banner/banner.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { MapViewComponent } from './map-view/map-view.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BannerComponent,
    TestimonialsComponent,
    WhoWeAreComponent,
    MapViewComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
