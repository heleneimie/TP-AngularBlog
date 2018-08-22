import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})

export class ListComponent implements OnInit {

  constructor(private articleService: ArticleService) {
    // console.log(articleService.getArticles());
  }

  // Détecte automatiquement le type récupéré (ici array)
  public articles: any[];

  // Injecte la liste d'articles à l'initialisation au 2e rendu de l'application, via le service ArticleService
  ngOnInit() {
    // .subscribe() attend une callback
    this.articleService.getArticles().subscribe((articlesFromServer: any[]) => {
      // console.log('res', articlesFromServer);
      this.articles = articlesFromServer;
    }, (error) => {
      // console.log(error);
      return error;
    });
  }

}
