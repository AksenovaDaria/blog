import { AuthComponent } from './page/auth/auth.component';
import { Routes } from '@angular/router';
import { MainspaceComponent } from './page/mainspace/mainspace.component';
import { CreateArticleComponent } from './page/create-article/create-article.component';
import { ArticalComponent } from './page/artical/artical.component';
import { RegComponent } from './page/reg/reg.component';
import { ProfileComponent } from './page/profile/profile.component';

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
  {
		path: 'auth',
		component: AuthComponent,
	},
  {
		path: 'registration',
		component: RegComponent,
	},
  {
		path: 'profile',
		component: ProfileComponent,
	},

];
