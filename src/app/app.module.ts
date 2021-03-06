import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageHomeComponent } from './features/pages/page-home/page-home.component';
import { PageInfoComponent } from './features/pages/page-info/page-info.component';
import { PageGovernanceComponent } from './features/pages/page-governance/page-governance.component';
import { PageProvidersComponent } from './features/pages/page-providers/page-providers.component';
import { PageNewsComponent } from './features/pages/page-news/page-news.component';
import { PageHistoryComponent } from './features/pages/page-history/page-history.component';
import { AxisComponent } from './features/components/axis/axis.component';
import { ProfileComponent } from './features/components/profile/profile.component';
import { NewsItemComponent } from './features/components/news-item/news-item.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PurposeComponent } from './features/components/purpose/purpose.component';
import { ObjectiveComponent } from './features/components/objective/objective.component';
import { PageNewsDetailComponent } from './features/pages/page-news-detail/page-news-detail.component';
import { ProviderComponent } from './features/components/provider/provider.component';
import { PageStudiesComponent } from './features/pages/page-studies/page-studies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    PageInfoComponent,
    PageGovernanceComponent,
    PageProvidersComponent,
    PageNewsComponent,
    PageHistoryComponent,
    AxisComponent,
    ProfileComponent,
    NewsItemComponent,
    FooterComponent,
    PurposeComponent,
    ObjectiveComponent,
    PageNewsDetailComponent,
    ProviderComponent,
    PageStudiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
