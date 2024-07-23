import { Component, Input, OnInit, output, Output } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { EventEmitter } from 'stream';


@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CheckboxModule, FormsModule, ReactiveFormsModule, CommonModule, ButtonModule],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.scss'
})
export class CategoryFilterComponent implements OnInit {
  @Input() categories: string[] = [];
  categoriesSelected = output<string[]>()

  public formGroup = new FormGroup({
    categories: new FormArray<FormGroup<{name: FormControl<string>, selected: FormControl<boolean>}>>([])
  })

  get formArray() {
    return this.formGroup.controls['categories'];
  }

  ngOnInit(): void {
    if (this.categories.length) {
      const categoriesControls = this.categories.map(category => new FormGroup({
        name: new FormControl<string>(category),
        selected: new FormControl<boolean>(false)
      }));
      const formArray = new FormArray(categoriesControls) as FormArray<FormGroup<{
        name: FormControl<string >, selected: FormControl<boolean>
      }>>;
      this.formGroup.setControl('categories', formArray);
    }

    // this.formArray.valueChanges.subscribe(item => {
    //   console.log('formAsdrray', item);
    // })
  }

  getCategory(categ: FormGroup<{name: FormControl<string>; selected: FormControl<boolean>}>): FormControl<boolean>  {
    return categ.get('selected') as FormControl<boolean>;

  }

  getName(categ: FormGroup<{name: FormControl<string>; selected: FormControl<boolean>}>): string {
    return categ.controls['name'].getRawValue();
  }

  getSelectedCategories(): void {
    const length = this.formArray.length;
    const selectedCategories: string[] = [];
    for (let i = 0; i<length; i++) {
      if (this.formArray.controls.at(i)?.controls['selected'].getRawValue()) {
        selectedCategories.push(this.formArray.controls.at(i)?.controls['name'].getRawValue() as string);
      };
    };
    this.categoriesSelected.emit(selectedCategories);
  }

  clearSelectedCategories(): void {
    const length = this.formArray.length;
    for (let i = 0; i<length; i++) {
      this.formArray.controls[i].controls['selected'].setValue(false);
    };
    this.categoriesSelected.emit([]);
  }

}
