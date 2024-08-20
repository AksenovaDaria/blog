import { IArtical, IUser } from "../../shared/application.config.interface";

export const USERS_FEATURE = 'state2';

export type IUserState = {
  user: IUser | null,
}
