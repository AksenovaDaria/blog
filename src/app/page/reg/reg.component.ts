import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RegistrationData, Users } from '../../shared/application-config.mock';
import { IRegistration, IUser } from '../../shared/application.config.interface';
import { Store } from '@ngrx/store';
import { IArticalState } from '../../store/articals/artical.state';
import { IUserState } from '../../store/users/users.state';
import { registerUser } from '../../store/users/users.action';
import { Server } from 'http';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, PasswordModule, InputTextModule, ButtonModule],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.scss'
})
export class RegComponent implements OnInit {
  public registrationData: IRegistration[] = [];

  public form = new FormGroup({
    data: new FormArray([])
  })

  public array = this.form.get('data') as FormArray;

  constructor(
    private readonly store$: Store<IUserState>,
  ) {}

  ngOnInit(): void {
    this.registrationData = RegistrationData;
    this.registrationData.forEach(item => {
      (this.form.get('data') as FormArray).push(new FormControl('', Validators.pattern(item.regular)));
    })
  }

  public itemArray(index: number): FormControl {
    return this.array.controls[index] as FormControl;
  }

  public register(): void {
    const nickNameIndex = this.registrationData.findIndex(item => item.name === 'nickname');
    if (nickNameIndex !== -1) {
      const existingUser =  Users.find(user => {
        user.nickname === this.itemArray(nickNameIndex).value;
      })
      if (existingUser) {
        console.log('Пользователь с данным никнеймом существует');
      } else {
        const user = {};
        const values = this.array.getRawValue();
        this.registrationData.forEach((data, index) => {
          Object.assign(user, {[data.name as keyof IUser]: values[index]} );
        })
        this.store$.dispatch(registerUser(user as IUser) );
      }
    }
  }

}
