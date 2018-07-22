import { Component, OnInit } from '@angular/core';
import { IMenu, IRoot, ICategory, IMenuItem } from '../il-fornello.interface';
import { IlFornelloService } from '../il-fornello.service';
import { FormGroup, FormBuilder } from 'app/ngx-strongly-typed-forms/model';

@Component({
  selector: 'app-il-fornello-home',
  templateUrl: './il-fornello-home.component.html',
  styleUrls: ['./il-fornello-home.component.styl']
})
export class IlFornelloHomeComponent implements OnInit {
  rootFormGroup: FormGroup<IRoot>;
  constructor(
    private service: IlFornelloService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.service.getMenu().subscribe((menu: IMenu) => {
      if (menu) {
        this.formBuilderGroupSetup(menu);
      }
    });
  }

  formBuilderGroupSetup(menu: IMenu) {
    this.rootFormGroup = this.formBuilder.group<IRoot>({
      tabMenu: this.formBuilder.group<IMenu>({
        categories: this.formBuilder.array<ICategory>(
          menu.categories.map((category: ICategory) =>
            this.formBuilder.group<ICategory>({
              categoryName: [category.categoryName],
              menuItems: this.formBuilder.array<IMenuItem>(
                category.menuItems.map((menuItem: IMenuItem) =>
                  this.formBuilder.group<IMenuItem>({
                    itemName: [menuItem.itemName],
                    itemDescription: [menuItem.itemDescription],
                    itemPrice: [menuItem.itemPrice],
                    itemPosition: [menuItem.itemPosition]
                  })
                )
              )
            })
          )
        )
      })
    });
  }
}
