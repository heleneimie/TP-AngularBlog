import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { CategoryService } from '../../services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-admin',
  templateUrl: './categoryAdmin.component.html',
})

export class CategoryAdminComponent implements OnInit{

  public category = {};
  public categories: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {}

  public initCategoryForm() {
    this.categoryService.getCategories().subscribe((categoriesFromServer: any[]) => {
      this.categories = categoriesFromServer;
    }, (error) => {
      return error;
    });
  }

  ngOnInit () {
    this.initCategoryForm();
  }

  // supprime une catégorie
  deleteCategory(id) {
    this.categoryService.deleteCategoryById(id).subscribe(
      (result) => {
        this.initCategoryForm();
      },
      (error) => {
        return error;
      }
    );
  }

  saveForm() {

    // ajoute une catégorie
    this.categoryService.addCategory(this.category).subscribe((response) => {
      this.toastr.success('Votre categorie a bien été ajoutée', 'Hourra !');
      this.initCategoryForm();
    }, (error) => {
      return error;
    });

  }

}
