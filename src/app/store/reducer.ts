import { articalsReducer } from "./articals/artical.reducer";
import { ARTICAL_FEATURE, IArticalState } from "./articals/artical.state";

export interface IStore {
  [ARTICAL_FEATURE]: IArticalState;
}

export const storeReducer = {
  [ARTICAL_FEATURE]: articalsReducer,
}
