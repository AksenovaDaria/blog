import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Users } from '../../shared/application-config.mock';
import { Store } from '@ngrx/store';
import { IUserState } from '../../store/users/users.state';
import { authUser } from '../../store/users/users.action';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, PasswordModule, InputTextModule, ButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  public form = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
  })

  constructor(
    private readonly store$: Store<IUserState>,
  ){}

  public auth(): void {
    const authData = {
      nickname: this.form.controls['name'].getRawValue(),
      password: this.form.controls['password'].getRawValue(),
    }
    const user = Users.find(user => {
      return user.nickname === authData.nickname;
    })
    if (user) {
      user.password === authData.password ? this.store$.dispatch(authUser(user) ) : console.log('Пароль не верный');
    } else {
      console.log('Пользователь не существует');
    }
  }

}
