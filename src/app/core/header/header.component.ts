import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { IUserState } from '../../store/users/users.state';
import { select, Store } from '@ngrx/store';
import { getUser } from '../../store/users/users.selector';
import { IUser } from '../../shared/application.config.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: IUser | null = null

  constructor(
    private readonly store$: Store<IUserState>,

  ){
    this.store$.pipe(
      select(getUser),
      tap((data) => {
        console.log(data)
        this.user = data
      })
    ).subscribe()
  }
}
