import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router) { }

  public article: any = {};

  ngOnInit() {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const id = Number(snapshot.params.id);

    this.articleService.getArticleById(id).subscribe((articleFromServer: any[]) => {
      this.article = articleFromServer;
    }, (error) => {
      return error;
    });
  }

  // supprime un article
  deleteArticle() {
    this.articleService.deleteArticleById(this.article.id).subscribe(
      result => {
        // console.log(result);
        this.router.navigate(['/articles']);
      },
      (error) => {
        return error;
      }
    );
  }

}
