import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { ChatAppComponent } from './pages/chat-app/chat-app.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren:() => import('./pages/chat-app/chat-app.module').then((m) => m.ChatAppModule)
  },
  {
    path: 'auth',
    loadChildren:() => import('./pages/auth/auth.module').then((m) => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
