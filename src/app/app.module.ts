import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// service qui permet d'envoyer des requêtes
import { HttpClientModule } from '@angular/common/http';
// service qui permet de définir des routes
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ArticleAdminComponent } from './admin/article/articleAdmin.component';
import { ArticleComponent } from './list/article/article.component';
import { DetailComponent } from './detail/detail.component';

import { ArticleService } from './services/article.service';
import { TruncatePipe } from './pipes/truncate.pipe';


const appRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'articles', component: ListComponent },
  { path: 'article/:id', component: DetailComponent },
  { path: 'admin/article/:id', component: ArticleAdminComponent },
  { path: 'admin/article/:id', component: ArticleAdminComponent },
  { path: 'admin/article', component: ArticleAdminComponent },
];

@NgModule({
  // déclare les components
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ArticleAdminComponent,
    ArticleComponent,
    DetailComponent,
    TruncatePipe,
  ],
  // déclare les modules propres à Angular que l'on peut appeler
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    FormsModule,
  ],
  // déclare les services
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
