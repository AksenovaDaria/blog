import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { RouterModule } from '@angular/router';
import { IArticalState } from '../../store/articals/artical.state';
import { select, Store } from '@ngrx/store';
import { getArtical, getArticals } from '../../store/articals/artical.selector';
import { IArtical } from '../../shared/application.config.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artical',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './artical.component.html',
  styleUrl: './artical.component.scss'
})
export class ArticalComponent {
  public artical$ = this.store$.pipe(
		select(getArtical({id: this.activatedRoute.snapshot.params["urlArtical"]})),
    tap<IArtical | undefined>(),
	);

  constructor(
		private readonly activatedRoute: ActivatedRoute,
    private readonly store$: Store<IArticalState>
	) {}

}
