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

  createDocument() {
    return {
      id: 0,
      author: this.author,
      title: this.title,
      content: this.content,
      type: 'draft',
      date: new Date(),
    };
  }

  addArticle() {
    const newArticle: Article = this.createDocument();
    console.log(newArticle);
    this.articleCreated.emit({ article: newArticle });
  }

  addDraft() {
    const newDraft: Article = this.createDocument();
    this.articleCreated.emit({ article: newDraft });
  }
}
