import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/de',
    pathMatch: 'full'
  },
  {
    path: ':language',
    component: FrontendComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'news',
        loadChildren: './news/news.module#NewsModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/de'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule {}
