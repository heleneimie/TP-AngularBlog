import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// service qui permet d'envoyer des requêtes
import { HttpClientModule } from '@angular/common/http';
// service qui permet de définir des routes
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// module qui permet l'ajout de flashbags
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ArticleAdminComponent } from './admin/article/articleAdmin.component';
import { CategoryAdminComponent } from './admin/category/categoryAdmin.component';
import { ArticleComponent } from './list/article/article.component';
import { DetailComponent } from './detail/detail.component';

import { ArticleService } from './services/article.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import {CategoryService} from './services/category.service';


const appRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'articles', component: ListComponent },
  { path: 'article/:id', component: DetailComponent },
  { path: 'admin/article/:id', component: ArticleAdminComponent },
  { path: 'admin/category', component: CategoryAdminComponent },
  { path: 'admin/article', component: ArticleAdminComponent },
];

@NgModule({
  // déclare les components
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ArticleAdminComponent,
    CategoryAdminComponent,
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
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    }), // ToastrModule added
  ],
  // déclare les services
  providers: [ArticleService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
