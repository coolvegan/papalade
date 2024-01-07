import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ZutatenComponent } from "./zutaten/zutaten.component";

const routes: Routes = [
  { path: "zutaten", component: ZutatenComponent },
  { path: "", redirectTo: "zutaten", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
