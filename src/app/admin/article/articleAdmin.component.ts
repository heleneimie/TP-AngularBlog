import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-article-admin',
  templateUrl: './articleAdmin.component.html',
})

export class ArticleAdminComponent implements OnInit {

  nameInput = FormControl;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  public article = {};
  public success: boolean = false;

  ngOnInit() {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const id = Number(snapshot.params.id);

    // récupérer le contenu du formulaire
    this.articleService.getArticleById(id).subscribe((articleFromServer: any[]) => {
      this.article = articleFromServer;
    }, (error) => {
      return error;
    });
  }

  saveForm() {
    this.articleService.updateArticle(this.article).subscribe((articleFromServer: any[]) => {
      this.success = true;
      this.msg = 'Vos modifications ont été prises en compte';
    }, (error) => {
      this.success = false;
      this.msg = 'Le champ est requis';
      return error;
    });
  }
}
