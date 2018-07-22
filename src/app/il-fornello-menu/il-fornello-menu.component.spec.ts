import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlFornelloMenuComponent } from './il-fornello-menu.component';
import { FormGroup, FormBuilder } from 'app/ngx-strongly-typed-forms/model';

describe('IlFornelloMenuComponent', () => {
  let component: IlFornelloMenuComponent;
  let fixture: ComponentFixture<IlFornelloMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IlFornelloMenuComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlFornelloMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
