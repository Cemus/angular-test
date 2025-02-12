import { Injectable } from '@angular/core';
import { Article } from '../../models/article.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  articles: Article[] = [
    {
      id: 1,
      title: 'Mon premier article',
      content: 'Ceci est le contenu de mon premier article.',
      author: 'Auteur 1',
      date: new Date('2023-01-01'),
      type: 'article',
    },
    {
      id: 2,
      title: 'Mon deuxième article',
      content: 'Ceci est le contenu de mon deuxième article.',
      author: 'Auteur 2',
      date: new Date('2023-02-01'),
      type: 'brouillon',
    },
  ];

  drafts: Article[] = [];

  addArticle(article: Article): void {
    this.articles.push(article);
  }

  addDraft(draft: Article): void {
    this.drafts.push(draft);
  }
}
