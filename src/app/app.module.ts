import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZutatenComponent } from './zutaten/zutaten.component';
import { ErstelleZutatComponent } from './erstelle-zutat/erstelle-zutat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TokenService } from '../../TokenService';
import { AuthInterceptor } from '../authinterceptor';
import { ExcelComponent } from './excel/excel.component';
@NgModule({
  declarations: [
    AppComponent,
    ZutatenComponent,
    ErstelleZutatComponent,
    LoginComponent,
    ExcelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    TokenService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
