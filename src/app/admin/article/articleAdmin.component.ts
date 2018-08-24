import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { CategoryService } from '../../services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-article-admin',
  templateUrl: './articleAdmin.component.html',
})

export class ArticleAdminComponent implements OnInit {

  public article: any = {};
  public addState: boolean = true;
  public categories: any;
  public selectedCategories = [];
  private snapshot: ActivatedRouteSnapshot;
  private id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private toastr: ToastrService,
  ) {}

  // à l'initialisation du composant
  ngOnInit() {
    this.getCategories();
    this.snapshot = this.route.snapshot;
    this.id = Number(this.snapshot.params.id);

    // si l'id est défini (donc on est dans formulaire modification article)
    if (this.id) {
      this.addState = false;
      this.getArticle();
    }
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

  saveForm() {

    // si formulaire ajout article
    if (this.addState) {
      this.articleService.addArticle(this.article).subscribe((response: {id}) => {
        this.toastr.success('Votre article a bien été ajouté', 'Hourra !');
        this.router.navigate(['article/', response.id]);
      }, (error) => {
        return error;
      });

      // sinon formulaire de mise à jour
    } else {
      this.articleService.updateArticle(this.article).subscribe((articleFromServer: any[]) => {
        this.toastr.success('Vos modifications ont été prises en compte');
      }, (error) => {
        return error;
      });
    }
  }

  // récupère les catégories
  public getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    }, (error) => {
      return error;
    });
  }

}
