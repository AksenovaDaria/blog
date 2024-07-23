import { createAction, props } from "@ngrx/store";
import { IArtical } from "../../shared/application.config.interface";

export enum ArticalsActionTypes {
  loadArticals = '[Articals] Load Articals',
  loadCategories = '[Categories] Load Categories',
  saveArtical = '[Articals] Save Artical',
  filterArticles = '[Articals] Filter Articles'
}

export const loadArticals = createAction(
  ArticalsActionTypes.loadArticals,
)

export const loadCategories = createAction(
  ArticalsActionTypes.loadCategories,
)

export const saveArtical = createAction(
  ArticalsActionTypes.saveArtical,
  (artical: any) => ({artical}),
)

export const filterArticles = createAction(
  ArticalsActionTypes.filterArticles,
  (categoriesSelected: string[]) => ({categoriesSelected})
)


