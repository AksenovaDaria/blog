import { createReducer, on } from "@ngrx/store";
import { IArtical } from "../../shared/application.config.interface";
import { loadArticals } from "./artical.action";
import { Articals, Catigories } from "../../shared/application-config.mock";

const initialState: IArtical[] = []

export const articalsReducer = createReducer(
  initialState,
  on(loadArticals, (state) => {
    return {...state, articals: Articals}
  }),
  on(loadArticals, (state) => {
    return {...state, categories: Catigories}
  })
)
