import { Users } from './../../shared/application-config.mock';
import { createAction, props } from "@ngrx/store";
import { IArtical, IUser } from "../../shared/application.config.interface";

export enum UserActionTypes {
  registerUser = '[User] Register a user',
  authUser = '[User] Auth User',
  addUser = '[User] Add User',

}


export const registerUser = createAction(
  UserActionTypes.registerUser,
  (user: IUser) => ({user})
)

export const authUser = createAction(
  UserActionTypes.authUser,
  (user: IUser) => ({user})
)

export const addUser = createAction(
  UserActionTypes.addUser,
  (user: IUser) => ({user})
)




