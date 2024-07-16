import { Component } from '@angular/core';
import { ArticleCardComponent } from "./article-card/article-card.component";
import { Articals } from '../../shared/application-config.mock';
import { select, Store } from '@ngrx/store';
import { getArticals } from '../../store/articals/artical.selector';
import { IArticalState } from '../../store/articals/artical.state';
import { IArtical } from '../../shared/application.config.interface';
import { tap } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainspace',
  standalone: true,
  imports: [ArticleCardComponent, CommonModule],
  templateUrl: './mainspace.component.html',
  styleUrl: './mainspace.component.scss'
})
export class MainspaceComponent {
  public articals: IArtical[] = [];

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

}
