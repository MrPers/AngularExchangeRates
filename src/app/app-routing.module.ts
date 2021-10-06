import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ChartComponent } from './modules/main/pages/chart/chart.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ErrorComponent } from './pages/error/error.component';
import { RegistComponent } from './pages/regist/regist.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then((el)=>el.MainModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((el)=>el.AdminModule)
  },
  { path: 'auth', component: AuthComponent },
  { path: 'regist', component: RegistComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
