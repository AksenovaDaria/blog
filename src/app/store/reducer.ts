import { articalsReducer } from "./articals/artical.reducer";
import { ARTICAL_FEATURE, IArticalState } from "./articals/artical.state";
import { userReducer } from "./users/users.reducer";
import { IUserState, USERS_FEATURE } from "./users/users.state";

export interface IStore {
  [ARTICAL_FEATURE]: IArticalState;
  [USERS_FEATURE]: IUserState;
}

export const storeReducer = {
  [ARTICAL_FEATURE]: articalsReducer,
  [USERS_FEATURE]: userReducer,
}
