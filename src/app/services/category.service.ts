import { Injectable } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn: ListComponent,
  }
)
export class CategoryService {

  public constructor(private http: HttpClient) {}

  getCategories() {
    // tape sur l'API du serveur qui tourne sur le port 4233 (défini dans le server.json du serveur)
    return this.http.get('http://localhost:4233/rest/categories');
  }

  // ajoute une catégorie
  addCategory(category) {
    console.log(category);
    return this.http.post(`http://localhost:4233/rest/categories`, category);
  }

  // supprime une catégorie
  deleteCategoryById(id) {
    return this.http.delete(`http://localhost:4233/rest/categories/${id}`);
  }
}
