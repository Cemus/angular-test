import { Component, OnInit } from '@angular/core';
import { AddArticleComponent } from '../add-article/add-article.component';
import { ArticleElementComponent } from '../article-element/article-element.component';
import { NgFor } from '@angular/common';
import { Article } from '../../../models/article.interface';

@Component({
  selector: 'app-blog-control-center',
  imports: [AddArticleComponent, ArticleElementComponent, NgFor],
  templateUrl: './blog-control-center.component.html',
  styleUrl: './blog-control-center.component.css',
})
export class BlogControlCenterComponent {
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

  onArticleAdded(articleData: { article: Article }) {
    const document = articleData.article;
    this.articles.push(document);
  }
}
