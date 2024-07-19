import { Component, OnInit } from '@angular/core';
import { ArticleCardComponent } from "./article-card/article-card.component";
import { Articals } from '../../shared/application-config.mock';
import { select, Store } from '@ngrx/store';
import { getArticals, getCategories } from '../../store/articals/artical.selector';
import { IArticalState } from '../../store/articals/artical.state';
import { IArtical } from '../../shared/application.config.interface';
import { tap } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterModule} from '@angular/router';
import { CategoryFilterComponent } from './category-filter/category-filter.component';



@Component({
  selector: 'app-mainspace',
  standalone: true,
  imports: [ArticleCardComponent, CommonModule, RouterLink, CategoryFilterComponent],
  templateUrl: './mainspace.component.html',
  styleUrl: './mainspace.component.scss'
})
export class MainspaceComponent implements OnInit {
  public articals: IArtical[] = [];
  public categories: string[] = [];
  
  constructor(
    private readonly store$: Store<IArticalState>
  ){}

  public articals$ = this.store$.pipe(
		select(getArticals),
		tap<IArtical[]>(),
		tap(articals => {
      this.articals = articals;
		}),
	);

  ngOnInit(): void {
    this.store$.pipe(
      select(getCategories),
      tap<string[]>(),
      tap(categories => {
        this.categories = categories;
      }),
    ).subscribe()
    console.log(this.categories)
  }

  filter(categoriesSelected: string[]): void {
    this.store$.pipe(
      select(getArticals),
      tap<IArtical[]>(),
      tap(articals => {
        this.articals = articals.filter(artical => {
          return artical.categories.find(category => {
            return categoriesSelected.find(selectedCategory => {
              if (category.includes(selectedCategory)){
                return true
              } else {return false}
            })
          })
        })
      }),
    ).subscribe()
  }




}
