import { IArtical } from "../../shared/application.config.interface";

export const ARTICAL_FEATURE = 'state';

export type IArticalState = {
  articals: IArtical[],
  categories: string[],
  filteredArticles: IArtical[],

}
