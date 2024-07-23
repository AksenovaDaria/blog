import { Component, OnInit } from '@angular/core';
import { ArticleCardComponent } from "./article-card/article-card.component";
import { Articals } from '../../shared/application-config.mock';
import { select, Store } from '@ngrx/store';
import { filteredArticles, getArticals, getCategories } from '../../store/articals/artical.selector';
import { IArticalState } from '../../store/articals/artical.state';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterModule} from '@angular/router';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { filterArticles } from '../../store/articals/artical.action';

@Component({
  selector: 'app-mainspace',
  standalone: true,
  imports: [ArticleCardComponent, CommonModule, RouterLink, CategoryFilterComponent],
  templateUrl: './mainspace.component.html',
  styleUrl: './mainspace.component.scss'
})
export class MainspaceComponent {
  public categories: string[] = [];
  public  categoriesSelected: string[] = []
  
  constructor(
    private readonly store$: Store<IArticalState>
  ){}

  public articals$ = this.store$.pipe(
		select(filteredArticles),
	);
  
  filter(categoriesSelected: string[]): void {
    console.log('qwerty')
    this.store$.dispatch(filterArticles(categoriesSelected));
  }

}
