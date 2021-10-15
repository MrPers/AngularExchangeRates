import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { AddDataComponent } from "./pages/add-data/AddDataComponent";
import { AdminComponent } from './admin.component';
import { CarrenciesComponent } from './pages/carrencies/carrencies.component';
import { AddDataComponent } from './pages/add-data/AddDataComponent';

const routes: Routes = [
  {
    path:'', component: AdminComponent,
    children:[
      {
        path: 'addData', component: AddDataComponent,
      },
      // {
      //   path: 'currencies', component: CarrenciesComponent,
      // }
      // EXEC [SELECT_Currencies]
    ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
