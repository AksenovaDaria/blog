import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CardModule ],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  @Input() title: string | null = null;
  @Input() content: string | null = null;

}
