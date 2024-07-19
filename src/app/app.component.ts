import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadArticals, loadCategories } from './store/articals/artical.action';
import { HeaderComponent } from "./core/header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private readonly store$: Store<any>
  ){}

  ngOnInit(): void {
    this.store$.dispatch(loadArticals());
    this.store$.dispatch(loadCategories());
  }
}
