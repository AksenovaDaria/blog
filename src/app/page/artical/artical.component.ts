import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { RouterModule } from '@angular/router';
import { IArticalState } from '../../store/articals/artical.state';
import { select, Store } from '@ngrx/store';
import { getArticals } from '../../store/articals/artical.selector';
import { IArtical } from '../../shared/application.config.interface';

@Component({
  selector: 'app-artical',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './artical.component.html',
  styleUrl: './artical.component.scss'
})
export class ArticalComponent implements OnInit {
  public artical: IArtical | undefined = undefined;
  private urlArtical: string | null = null;

  constructor(
		private readonly activatedRoute: ActivatedRoute,
    private readonly store$: Store<IArticalState>

	) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
    .pipe(
      map(paramsMap => {
        this.urlArtical = paramsMap.get('urlArtical');

      }),
    )
    .subscribe(item => item);

    this.store$.pipe(
      select(getArticals),
      tap<IArtical[]>(),
      tap(articals => {
        if (this.urlArtical)
        this.artical = articals.find(item => item.url === this.urlArtical)
      }),
    ).subscribe()
  }

}
