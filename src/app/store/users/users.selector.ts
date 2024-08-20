import { Users } from './../../shared/application-config.mock';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IArtical } from "../../shared/application.config.interface";
import { IUserState, USERS_FEATURE } from "./users.state";

export const usersFeatureSelector = createFeatureSelector<IUserState>(USERS_FEATURE)


export const getUser = createSelector(
	usersFeatureSelector,
	(state: IUserState) => state.user,
);





