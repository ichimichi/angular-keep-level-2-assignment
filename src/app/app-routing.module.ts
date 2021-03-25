import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CanActivateRouteGuard } from "./can-activate-route.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [CanActivateRouteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
