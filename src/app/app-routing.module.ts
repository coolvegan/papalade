import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ZutatenComponent } from "./zutaten/zutaten.component";
import { ErstelleZutatComponent } from "./erstelle-zutat/erstelle-zutat.component";

const routes: Routes = [
  { path: "zutaten", component: ZutatenComponent },
  { path: "createZutat", component: ErstelleZutatComponent },
  { path: "", redirectTo: "zutaten", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
