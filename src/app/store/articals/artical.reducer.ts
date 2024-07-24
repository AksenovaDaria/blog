import { createReducer, on } from "@ngrx/store";
import { IArtical } from "../../shared/application.config.interface";
import {  addArtical, filterArticles, loadArticals, saveArtical } from "./artical.action";
import { Articals, Catigories } from "../../shared/application-config.mock";
import { createUrl } from "../../shared/create-url";
import { articalsFeatureSelector } from "./artical.selector";
import { IArticalState } from "./artical.state";

const initialState: IArticalState = {
  articals: [],
  categories: [],
  filteredArticles: [],
  selectedCategories: []
}

export const articalsReducer = createReducer(
  initialState,
  on(loadArticals, (state) => {
    return {...state, articals: Articals, filteredArticles: Articals}
  }),
  on(loadArticals, (state) => {
    return {...state, categories: Catigories}
  }),
  on(addArtical, (state, {artical}) => {
    const articals: IArtical[] = state.articals.concat(artical);
    const isCategorySelect = artical.categories.find((category: string) => {
      return state.selectedCategories.length === 0 ? true : state.selectedCategories.includes(category)
    })
    return {
      ... state,
      articals: articals,
      filteredArticles: isCategorySelect ? state.articals.concat(artical) : state.filteredArticles
    }
  }),
  on(filterArticles, (state, {categoriesSelected}) => {
    const filteredArticles =  !categoriesSelected.length 
		? state.articals 
		: state.articals.filter(artical => {
			return artical.categories.find(category => {
			    return categoriesSelected.includes(category);
			})
		})
    return {
      ...state,
      filteredArticles: filteredArticles,
      selectedCategories: categoriesSelected
    }
  })

)
