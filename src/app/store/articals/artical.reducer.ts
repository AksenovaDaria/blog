import { createReducer, on } from "@ngrx/store";
import { IArtical } from "../../shared/application.config.interface";
import { filterArticles, loadArticals, saveArtical } from "./artical.action";
import { Articals, Catigories } from "../../shared/application-config.mock";
import { createUrl } from "../../shared/create-url";
import { articalsFeatureSelector } from "./artical.selector";
import { IArticalState } from "./artical.state";

const initialState: IArticalState = {
  articals: [],
  categories: [],
  filteredArticles: [],
}

export const articalsReducer = createReducer(
  initialState,
  on(loadArticals, (state) => {
    return {...state, articals: Articals, filteredArticles: Articals}
  }),
  on(loadArticals, (state) => {
    return {...state, categories: Catigories}
  }),
  on(saveArtical, (state, {artical}) => {
    const url: string = createUrl(artical.title);
    const articalNew: IArtical[] = [{...artical, url: url}]
    const articals: IArtical[] = [...state.articals, ...articalNew];
    return {
      ... state,
      articals: articals
    }
  }),
  on(filterArticles, (state, {categoriesSelected}) => {
    const filteredArticles =  !categoriesSelected.length 
		? state.articals 
		: state.articals.filter(artical => {
			return artical.categories.find(category => {
			    return categoriesSelected.includes(category)
			})
		})
    return {
      ...state,
      filteredArticles: filteredArticles
    }
  })

)
