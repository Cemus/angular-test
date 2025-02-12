import { Component, Input } from '@angular/core';
import { Article } from '../../../models/article.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-article-element',
  imports: [NgClass],
  templateUrl: './article-element.component.html',
  styleUrl: './article-element.component.css',
})
export class ArticleElementComponent {
  @Input() article!: Article;
}
