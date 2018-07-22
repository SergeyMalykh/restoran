import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from 'app/ngx-strongly-typed-forms/model';
import { IMenu, ICategory, IMenuItem } from '../il-fornello.interface';

@Component({
  selector: 'app-il-fornello-menu',
  templateUrl: './il-fornello-menu.component.html',
  styleUrls: ['./il-fornello-menu.component.styl']
})
export class IlFornelloMenuComponent implements OnInit {
  @Input() inputFormGroup: FormGroup<IMenu>;
  constructor() {}

  ngOnInit() {}

  trackByFn(index: number) {
    return index;
  }

  formArrayCategories(): FormArray<ICategory> {
    return <FormArray<ICategory>>this.inputFormGroup.controls.categories;
  }

}
