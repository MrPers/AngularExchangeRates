import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { CrapComponent } from './pages/crap/crap.component';
import { ErrorComponent } from './pages/error/error.component';
import { IndexComponent } from './pages/index/index.component';
import { RegistComponent } from './pages/regist/regist.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'crap', component: CrapComponent },
  { path: 'index', component: IndexComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'regist', component: RegistComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
