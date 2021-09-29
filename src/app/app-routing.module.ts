import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { TableComponent } from './pages/table/table.component';
import { ErrorComponent } from './pages/error/error.component';
import { ChartComponent } from './pages/chart/chart.component';
import { RegistComponent } from './pages/regist/regist.component';

const routes: Routes = [
  { path: '', component: ChartComponent },
  { path: 'table', component: TableComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'regist', component: RegistComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
