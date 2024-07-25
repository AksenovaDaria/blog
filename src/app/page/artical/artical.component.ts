import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { RouterModule } from '@angular/router';
import { IArticalState } from '../../store/articals/artical.state';
import { select, Store } from '@ngrx/store';
import { getArtical, getArticals } from '../../store/articals/artical.selector';
import { IArtical } from '../../shared/application.config.interface';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { CreateArticleComponent } from '../create-article/create-article.component';


@Component({
  selector: 'app-artical',
  standalone: true,
  imports: [RouterModule, CommonModule, ButtonModule, FormsModule, ReactiveFormsModule, EditorModule, InputTextModule, CreateArticleComponent],
  templateUrl: './artical.component.html',
  styleUrl: './artical.component.scss'
})
export class ArticalComponent {
  public isEditing = false;
  public artical$ = this.store$.pipe(
		select(getArtical({id: this.activatedRoute.snapshot.params["urlArtical"]})),
    tap<IArtical | undefined>(),
	);

  constructor(
		private readonly activatedRoute: ActivatedRoute,
    private readonly store$: Store<IArticalState>
	) {}

  editing() {
    this.isEditing = true;
  }

  editingCompleted() {
    this.isEditing = false;
  }

}
