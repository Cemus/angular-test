import { Component, OnInit } from '@angular/core';
import { AddArticleComponent } from '../add-article/add-article.component';
import { ArticleElementComponent } from '../article-element/article-element.component';
import { NgFor } from '@angular/common';
import { BlogService } from '../../../services/blog/blog.service';
import { Article } from '../../../models/article.interface';

@Component({
  selector: 'app-blog-control-center',
  imports: [AddArticleComponent, ArticleElementComponent, NgFor],
  templateUrl: './blog-control-center.component.html',
  styleUrl: './blog-control-center.component.css',
})
export class BlogControlCenterComponent {
  articles: Article[] = [];
  drafts: Article[] = [];

  constructor(public BlogService: BlogService) {
    this.initRessources();
  }

  initRessources() {
    this.articles = this.BlogService.articles;
    this.drafts = this.BlogService.drafts;
    console.log(this.articles);
  }

  onArticleAdded(articleData: { article: Article }) {
    const document = articleData.article;
    /*     document.type === 'article'
      ? this.BlogService.addArticle(document)
      : this.BlogService.addDraft(document); */
    /* 
    this.initRessources(); */
    document.type === 'article'
      ? this.articles.push(document)
      : this.drafts.push(document);
  }
}
