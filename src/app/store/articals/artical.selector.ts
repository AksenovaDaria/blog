import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IArtical } from "../../shared/application.config.interface";
import { ARTICAL_FEATURE, IArticalState } from "./artical.state";

export const articalsFeatureSelector = createFeatureSelector<IArticalState>(ARTICAL_FEATURE)


export const getArticals = createSelector(
	articalsFeatureSelector,
	(state: IArticalState) => state.articals,
);

export const getCategories = createSelector(
	articalsFeatureSelector,
	(state: IArticalState) => state.categories,
);

export const filteredArticles = createSelector(
	articalsFeatureSelector,
	(state: IArticalState) => state.filteredArticles
)

// export const filterSelector = (props: {categoriesSelected: string[]}) =>   
// 	createSelector(     
// 	getArticals, (articals) => {
// 		return !props.categoriesSelected.length 
// 		? articals 
// 		: articals.filter(artical => {
// 			return artical.categories.find(category => {
// 			    return props.categoriesSelected.includes(category)
// 			})
// 		})
// 	}
// 	);



