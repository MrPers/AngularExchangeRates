import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddDataComponent } from './pages/add-data/add-data.component';
import { AdminComponent } from './admin.component';
import { CarrenciesComponent } from './pages/carrencies/carrencies.component';

const routes: Routes = [
  {
    path:'', component: AdminComponent,
    children:[
      {
        path: 'addData', component: AddDataComponent,
      },
      {
        path: 'currencies', component: CarrenciesComponent,
      }
    ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
