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

export const getSelectedCategories = createSelector(
	articalsFeatureSelector,
	(state: IArticalState) => {return {categories: state.categories, selectedCategories: state.selectedCategories}},
)

export const getArtical = (props: {id: string}) =>   
	createSelector(  
		articalsFeatureSelector,   
		(state: IArticalState) => {
			return state.articals.find(item => item.id === props.id)
		},     
	);



