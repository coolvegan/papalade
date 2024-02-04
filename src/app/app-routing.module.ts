import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZutatenComponent } from './zutaten/zutaten.component';
import { ErstelleZutatComponent } from './erstelle-zutat/erstelle-zutat.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../AuthGuard';
import { ExcelComponent } from './excel/excel.component';

const routes: Routes = [
  { path: 'zutaten', component: ZutatenComponent, canActivate: [AuthGuard] },
  {
    path: 'createZutat',
    component: ErstelleZutatComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id',
    component: ErstelleZutatComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'excel', component: ExcelComponent },
  { path: '', redirectTo: 'zutaten', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
