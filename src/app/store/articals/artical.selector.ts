import { createFeatureSelector } from "@ngrx/store";
import { IArtical } from "../../shared/application.config.interface";
import { ARTICAL_FEATURE } from "./artical.state";

export const articalsFeatureSelector = createFeatureSelector<{articals: IArtical; categories: string[]}>(ARTICAL_FEATURE)
