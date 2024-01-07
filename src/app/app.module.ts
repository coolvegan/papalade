import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZutatenComponent } from './zutaten/zutaten.component';
import { ErstelleZutatComponent } from './erstelle-zutat/erstelle-zutat.component';

@NgModule({
  declarations: [
    AppComponent,
    ZutatenComponent,
    ErstelleZutatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
