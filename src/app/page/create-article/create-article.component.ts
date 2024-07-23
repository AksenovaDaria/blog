import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { title } from 'process';
import { Catigories } from '../../shared/application-config.mock';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { IArticalState } from '../../store/articals/artical.state';
import { saveArtical } from '../../store/articals/artical.action';
import { IArtical } from '../../shared/application.config.interface';


@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [MultiSelectModule, FormsModule, ReactiveFormsModule, EditorModule, ButtonModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.scss'
})
export class CreateArticleComponent implements OnInit {
  public categories: string[] = Catigories;

  public form = new FormGroup({
    title: new FormControl(),
    category: new FormControl(),
    content: new FormControl(),
  })

  constructor(
    private readonly store$: Store<IArticalState>
  ){}

  ngOnInit(): void {
    this.form.valueChanges.subscribe(item => {
      console.log(item);
    })
  }

  onTextChange(event: any): void {
    console.log(event, 'onTextChange');
  }

  saveArticle() {
    const artical: Omit<IArtical, 'url'> = {
      title: this.form.controls['title'].getRawValue(),
      categories: this.form.controls['category'].getRawValue(),
      content: this.form.controls['content'].getRawValue(),
    }
    console.log(artical);
    this.store$.dispatch(saveArtical(artical));
  }

}
