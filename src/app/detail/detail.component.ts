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
  public content: string;
  public username: string;
  private snapshot: ActivatedRouteSnapshot;
  private id: number;

  // à l'initialisation du composant
  ngOnInit() {
    this.snapshot = this.route.snapshot;
    this.id = Number(this.snapshot.params.id);

    this.getArticle();
  }

  // récupère un article
  getArticle() {
    // récupérer le contenu du formulaire
    this.articleService.getArticleById(this.id).subscribe((articleFromServer: any[]) => {
      this.article = articleFromServer;
    }, (error) => {
      return error;
    });
  }

  // supprime un article
  deleteArticle() {
    this.articleService.deleteArticleById(this.article.id).subscribe(
      (result) => {
        this.router.navigate(['/articles']);
      },
      (error) => {
        return error;
      }
    );
  }

  // ajout d'un commentaire
  public addComment() {

    if (this.username && this.content) {
      const body = {
        'username': this.username,
        'content': this.content
      };
      this.articleService.articleComment(this.article.id, body).subscribe((response) => {
        // permet d'afficher les nouveaux commentaires sans devoir recharger la page
        this.getArticle();
      }, (error) => {
        return error;
      });
    } else {
      console.log('Euhoh');
    }
  }

}
