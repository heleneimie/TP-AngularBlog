import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-admin',
  templateUrl: './articleAdmin.component.html',
})

export class ArticleAdminComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) { }
  public article: any = {};
  public success = false;
  public msg = '';
  public addState: boolean = true;

  ngOnInit() {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const id = Number(snapshot.params.id);

    // si l'id est défini (donc on est dans formulaire modification article)
    if (id) {
      this.addState = false;
      // récupérer le contenu du formulaire
      this.articleService.getArticleById(id).subscribe((articleFromServer: any[]) => {
        this.article = articleFromServer;
      }, (error) => {
        return error;
      });
    }
  }

  saveForm() {

    // si formulaire ajout article
    if (this.addState) {
      this.articleService.addArticle(this.article).subscribe((response: {id}) => {
        this.success = true;
        this.msg = 'Votre article a bien été ajouté';
        this.router.navigate(['article/', response.id]);
      }, (error) => {
        this.success = false;
        this.msg = 'Le champ est requis';
        return error;
      });

    } else {

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
}
