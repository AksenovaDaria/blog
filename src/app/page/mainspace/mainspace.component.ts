import { Component, OnInit } from '@angular/core';
import { ArticleCardComponent } from "./article-card/article-card.component";
import { Articals } from '../../shared/application-config.mock';
import { select, Store } from '@ngrx/store';
import { filteredArticles, getArticals, getCategories } from '../../store/articals/artical.selector';
import { IArticalState } from '../../store/articals/artical.state';
import { IArtical } from '../../shared/application.config.interface';
import { tap } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
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
  public articals: IArtical[] = [];
  public categories: string[] = [];
  public  categoriesSelected: string[] = []
  
  constructor(
    private readonly store$: Store<IArticalState>
  ){}

  public articals$ = this.store$.pipe(
		select(filteredArticles),
		tap(articals => {
      this.articals = articals;
		})
	);

  public categories$ = this.store$.pipe(
    select(getCategories),
    tap(categories => {
      this.categories = categories;
    })
  )
  
  filter(categoriesSelected: string[]): void {
    this.store$.dispatch(filterArticles(categoriesSelected));
  }

}
