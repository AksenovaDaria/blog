import { createAction, props } from "@ngrx/store";
import { IArtical } from "../../shared/application.config.interface";

export enum ArticalsActionTypes {
  loadArticals = '[Articals] Load Articals',
  loadCategories = '[Categories] Load Categories',
  saveArtical = '[Articals] Save Artical',
  filterArticles = '[Articals] Filter Articles',
  addArtical = '[Articals] Add Artical',
  changeArtical = '[Articals] Change Artical'
}

export const loadArticals = createAction(
  ArticalsActionTypes.loadArticals,
)

export const loadCategories = createAction(
  ArticalsActionTypes.loadCategories,
)

export const saveArtical = createAction(
  ArticalsActionTypes.saveArtical,
  (artical: Omit<IArtical, 'id'>) => ({artical}),
)

export const addArtical = createAction(
  ArticalsActionTypes.addArtical,
  (artical: IArtical) => ({artical}),
)

export const filterArticles = createAction(
  ArticalsActionTypes.filterArticles,
  (categoriesSelected: string[]) => ({categoriesSelected})
)

export const changeArtical = createAction(
  ArticalsActionTypes.changeArtical,
  (artical: IArtical) => ({artical}),
)


