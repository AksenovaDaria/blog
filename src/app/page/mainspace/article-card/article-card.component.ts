import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import {RouterLink, RouterModule} from '@angular/router';


@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CardModule, RouterLink,  ],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  @Input() title: string | null = null;
  @Input() content: string | null = null;
  @Input() id!: string;


  click() {
    console.log('click')
  }

}
