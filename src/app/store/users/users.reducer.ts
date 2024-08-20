import { createReducer, on } from "@ngrx/store";
import { Users } from "../../shared/application-config.mock";
import { IUserState } from "./users.state";
import { authUser, registerUser } from "./users.action";


const initialState: IUserState= {
  user: null,

}

export const userReducer = createReducer(
  initialState,
  on(registerUser, (state, {user}) => {
    return {...state, user: user}
  }),

  on(authUser, (state, {user}) => {
    return {...state, user: user}
  }),

)
