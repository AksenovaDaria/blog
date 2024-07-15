import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { title } from 'process';
import { Catigories } from '../../shared/application-config.mock';
import { EditorModule } from 'primeng/editor';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [MultiSelectModule, FormsModule, ReactiveFormsModule, EditorModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.scss'
})
export class CreateArticleComponent implements OnInit {
  public categories: string[] = Catigories;

  public form = new FormGroup({
    title: new FormControl<string>(''),
    category: new FormControl(),
    content: new FormControl(),
  })

  ngOnInit(): void {
    this.form.valueChanges.subscribe(item => {
      console.log(item);
    })
  }

  onTextChange(event: any): void {
    console.log(event, 'onTextChange');
  }

}
