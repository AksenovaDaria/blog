import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { IArticalState } from "./artical.state";
import { addArtical, saveArtical } from "./artical.action";
import { switchMap, take, tap } from "rxjs";
import { createUrl } from "../../shared/create-url";
import { IArtical } from "../../shared/application.config.interface";
import { Router } from "@angular/router";
import { getArticals } from "./artical.selector";

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
                    let length = 0
                    const observable = this.store$.pipe(
                        select(getArticals),
                    )
                    const subscription = observable.subscribe(articals => { length = articals.length})
                    const url: string = createUrl(artical.artical.title, length);
					this.router.navigateByUrl(`/artical/${url}`);
                    const newArtical = {...artical.artical, url: url}
                    this.store$.dispatch(addArtical(newArtical));
                    subscription.unsubscribe()
				}),
			),
		{dispatch: false},
	);

}