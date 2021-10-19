import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { ChartComponent } from './pages/chart/chart.component';
import { TableComponent } from './pages/table/table.component';
import { StatisticsChartComponent } from './pages/statistics-chart/statistics-chart.component';

const routes: Routes = [
  {
    path:'', component: MainComponent,
    children:[
      {
        path: 'chart', component: ChartComponent,
      },
      {
        path: 'table', component: TableComponent,
      },
      {
        path: 'statisticsChart', component: StatisticsChartComponent,
      }
    ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
