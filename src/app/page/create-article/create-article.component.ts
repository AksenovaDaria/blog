import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { title } from 'process';
import { Catigories } from '../../shared/application-config.mock';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { IArticalState } from '../../store/articals/artical.state';
import { changeArtical, saveArtical } from '../../store/articals/artical.action';
import { IArtical } from '../../shared/application.config.interface';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [MultiSelectModule, FormsModule, ReactiveFormsModule, EditorModule, ButtonModule, InputTextModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.scss'
})
export class CreateArticleComponent implements OnInit {
  @Input() artical: IArtical | undefined = undefined;
  @Output() editingCompleted = new EventEmitter();
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
    if (this.artical !== undefined) {
      this.form.controls['title'].setValue(this.artical.title);
      this.form.controls['category'].setValue(this.artical.categories);
      this.form.controls['content'].setValue(this.artical.content);
    }
    // this.form.valueChanges.subscribe(item => {
    //   console.log(item);
    // })
  }

  onTextChange(event: any): void {
    // console.log(event, 'onTextChange');
  }

  saveArticle(): void {
    if (this.artical) {
      this.artical = {
        ...this.artical,
        title: this.form.controls['title'].getRawValue(),
        categories: this.form.controls['category'].getRawValue(),
        content: this.form.controls['content'].getRawValue(),
      }
      this.store$.dispatch(changeArtical(this.artical));
      this.editingCompleted.emit();
    } else {
      const newArtical: Omit<IArtical, 'id'> = {
        title: this.form.controls['title'].getRawValue(),
        categories: this.form.controls['category'].getRawValue(),
        content: this.form.controls['content'].getRawValue(),
      }
      this.store$.dispatch(saveArtical(newArtical));
    }
  }

}
