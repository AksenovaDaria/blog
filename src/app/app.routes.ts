import { Routes } from '@angular/router';
import { MainspaceComponent } from './page/mainspace/mainspace.component';
import { CreateArticleComponent } from './page/create-article/create-article.component';
import { ArticalComponent } from './page/artical/artical.component';

export const routes: Routes = [
  {
		path: '',
		component: MainspaceComponent,
	},
  {
		path: 'create',
		component: CreateArticleComponent,
	},
  {
		path: 'artical/:urlArtical',
		component: ArticalComponent,
	},

];
