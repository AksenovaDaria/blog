import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IArtical } from "../../shared/application.config.interface";
import { ARTICAL_FEATURE, IArticalState } from "./artical.state";

export const articalsFeatureSelector = createFeatureSelector<IArticalState>(ARTICAL_FEATURE)

export const getArticals = createSelector(
	articalsFeatureSelector,
	(articals: IArticalState) => articals.articals,
);
