import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Article } from '../../../models/article.interface';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css',
})
export class AddArticleComponent {
  @Output() articleCreated = new EventEmitter<{ article: Article }>();

  author: string = '';
  title: string = '';
  content: string = '';

  createDocument(type: 'article' | 'draft') {
    return {
      id: 0,
      author: this.author,
      title: this.title,
      content: this.content,
      type: type,
      date: new Date(),
    };
  }

  addDocument(type: string) {
    const newArticle: Article =
      type === 'article'
        ? this.createDocument('article')
        : this.createDocument('draft');
    this.articleCreated.emit({ article: newArticle });
  }
}
