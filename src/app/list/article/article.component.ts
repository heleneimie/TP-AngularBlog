import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  // permet de récupérer les attributs de ArticleComponent
  @Input() article;
}












