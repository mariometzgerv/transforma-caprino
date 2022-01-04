import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGovernanceComponent } from './features/pages/page-governance/page-governance.component';
import { PageHistoryComponent } from './features/pages/page-history/page-history.component';
import { PageHomeComponent } from './features/pages/page-home/page-home.component';
import { PageInfoComponent } from './features/pages/page-info/page-info.component';
import { PageNewsComponent } from './features/pages/page-news/page-news.component';
import { PageProvidersComponent } from './features/pages/page-providers/page-providers.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: PageHomeComponent },
  { path: 'nosotros', component: PageInfoComponent },
  { path: 'governanza', component: PageGovernanceComponent },
  { path: 'productores', component: PageProvidersComponent },
  { path: 'noticias', component: PageNewsComponent },
  { path: 'historia', component: PageHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
