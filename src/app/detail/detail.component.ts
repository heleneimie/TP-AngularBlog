import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  public article = {};

  ngOnInit() {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const id = Number(snapshot.params.id);

    this.articleService.getArticleById(id).subscribe((articleFromServer: any[]) => {
      this.article = articleFromServer;
    }, (error) => {
      return error;
    });
  }
}
