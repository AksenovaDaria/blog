import { Component, Input, OnDestroy, OnInit, output, Output } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { EventEmitter } from 'stream';
import { IArticalState } from '../../../store/articals/artical.state';
import { select, Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import { getSelectedCategories } from '../../../store/articals/artical.selector';


@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CheckboxModule, FormsModule, ReactiveFormsModule, CommonModule, ButtonModule],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.scss'
})
export class CategoryFilterComponent implements OnInit, OnDestroy {
  public categoriesSelected = output<string[]>();
  private observable = this.store$.pipe(
    select(getSelectedCategories),
  );
  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.subscription = this.observable.subscribe((categories) => {
      if (categories.categories.length) {
        const categoriesControls = categories.categories.map(category => {
          const value = categories.selectedCategories.includes(category)
          return new FormGroup({
          name: new FormControl<string>(category),
          selected: new FormControl<boolean>(value)
        })})
        const formArray = new FormArray(categoriesControls) as FormArray<FormGroup<{
          name: FormControl<string >, selected: FormControl<boolean>
        }>>;
        this.formGroup.setControl('categories', formArray);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public formGroup = new FormGroup({
    categories: new FormArray<FormGroup<{name: FormControl<string>, selected: FormControl<boolean>}>>([])
  })

  get formArray() {
    return this.formGroup.controls['categories'];
  }

  constructor(
    private readonly store$: Store<IArticalState>
  ){}

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
