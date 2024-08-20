import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IUserState } from "./users.state";
import { addUser, authUser, registerUser } from "./users.action";
import { tap } from "rxjs";
import { Router } from "@angular/router";
import { Users } from "../../shared/application-config.mock";


@Injectable({providedIn: 'root'})
export class UserEffects {
	constructor(
		private readonly action$: Actions,
		private readonly store$: Store<IUserState>,
    private router: Router

	) {}


  registerUser$ = createEffect(
		() =>
			this.action$.pipe(
				ofType(registerUser),
				tap(user => {
          Users.push(user.user)
					this.router.navigateByUrl(`/profile`);
          this.store$.dispatch(addUser(user.user));
				}),
			),
		{dispatch: false},
	);

  authUser$ = createEffect(
		() =>
			this.action$.pipe(
				ofType(authUser),
				tap(user => {
					this.router.navigateByUrl(`/profile`);
          this.store$.dispatch(addUser(user.user));
				}),
			),
		{dispatch: false},
	);


}
