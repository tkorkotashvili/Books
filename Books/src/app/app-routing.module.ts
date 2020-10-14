import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// components
import { AuthGuard } from './core/guard/auth.guard';
import { ContentLayoutComponent} from './layout/content-layout/content-layout.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/signin',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
