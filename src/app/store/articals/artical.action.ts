import { createAction, props } from "@ngrx/store";
import { IArtical } from "../../shared/application.config.interface";

export enum ArticalsActionTypes {
  loadArticals = '[Articals] Load Articals',
  loadCategories = '[Categories] Load Categories',
}

export const loadArticals = createAction(
  ArticalsActionTypes.loadArticals,
)

export const loadCategories = createAction(
  ArticalsActionTypes.loadCategories,
)


