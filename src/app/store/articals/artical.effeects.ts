import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { IArticalState } from "./artical.state";
import { addArtical, saveArtical } from "./artical.action";
import { switchMap, take, tap } from "rxjs";
import { Router } from "@angular/router";
import { v4 as uuidv4 } from 'uuid';


@Injectable({providedIn: 'root'})
export class ArticalEffects {
	constructor(
		private readonly action$: Actions,
		private readonly store$: Store<IArticalState>,
        private router: Router
	) {}

    redirectOnArtical$ = createEffect(
		() =>
			this.action$.pipe(
				ofType(saveArtical),
				tap(artical => {
                    const id: string = uuidv4();
					this.router.navigateByUrl(`/artical/${id}`);
                    const newArtical = {...artical.artical, id: id}
                    this.store$.dispatch(addArtical(newArtical));
				}),
			),
		{dispatch: false},
	);

}