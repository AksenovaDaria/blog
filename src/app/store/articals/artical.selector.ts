import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IArtical } from "../../shared/application.config.interface";
import { ARTICAL_FEATURE, IArticalState } from "./artical.state";

export const articalsFeatureSelector = createFeatureSelector<IArticalState>(ARTICAL_FEATURE)


export const getArticals = createSelector(
	articalsFeatureSelector,
	(articals: IArticalState) => articals.articals,
);

export const getCategories = createSelector(
	articalsFeatureSelector,
	(articals: IArticalState) => articals.categories,
);

export const filterSelector = (props: {categoriesSelected: string[]}) =>   
	createSelector(     
	getArticals, (articals) => {
		return !props.categoriesSelected.length 
		? articals 
		: articals.filter(artical => {
			return artical.categories.find(category => {
			    return props.categoriesSelected.includes(category)
			})
		})
	}
	);



