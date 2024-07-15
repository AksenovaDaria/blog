import { Component } from '@angular/core';
import { ArticleCardComponent } from "./article-card/article-card.component";
import { Articals } from '../../shared/application-config.mock';

@Component({
  selector: 'app-mainspace',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './mainspace.component.html',
  styleUrl: './mainspace.component.scss'
})
export class MainspaceComponent {
  public articals = Articals;

}
