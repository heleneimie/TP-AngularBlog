import { Injectable } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn: ListComponent,
  }
)
export class ArticleService {

  public constructor(private http: HttpClient) {}

  // public articles = [
  //   { 'title' : "Hello World !",
  //     'content' : "Lorem ipsum dolor sit amet blablabla",
  //     'comments': [
  //       {
  //         'username': "Anne",
  //         'content': "top",
  //       },
  //       {
  //         'username': "Julian",
  //         'content': "bof",
  //       },
  //     ]
  //   },
  //   { 'title' : "How I did my first Angular article !",
  //     'content' : "Lorem ipsum dolor sit amet blablabla Lorem ipsum dolor sit amet blablabla",
  //     'comments' : []
  //   },
  //   { 'title' : "How I did my second Angular article !",
  //     'content' : "Lorem ipsum blablabla",
  //     'comments' : [
  //       {
  //         'username': "Ben",
  //         'content': "génial",
  //       }
  //     ]
  //   }
  // ];

  getArticles() {
    // tape sur l'API du serveur qui tourne sur le port 4233 (défini dans le server.json du serveur)
    return this.http.get('http://localhost:4233/rest/articles');
    // console.log(this.articles);
  }

  // récupère un article par son id
  getArticleById(id) {
    return this.http.get(`http://localhost:4233/rest/articles/${id}`);
  }

  // met à jour un article
  updateArticle(article) {
    return this.http.put(`http://localhost:4233/rest/articles/${article.id}`, article);
  }

}
