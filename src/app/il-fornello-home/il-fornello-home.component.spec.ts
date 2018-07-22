import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlFornelloHomeComponent } from './il-fornello-home.component';
import { IlFornelloAboutComponent } from '../il-fornello-about/il-fornello-about.component';
import { IlFornelloMenuComponent } from '../il-fornello-menu/il-fornello-menu.component';
import { IlFornelloContactComponent } from '../il-fornello-contact/il-fornello-contact.component';
import { IlFornelloService } from '../il-fornello.service';

describe('IlFornelloHomeComponent', () => {
  let component: IlFornelloHomeComponent;
  let fixture: ComponentFixture<IlFornelloHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IlFornelloHomeComponent,
        IlFornelloAboutComponent,
        IlFornelloMenuComponent,
        IlFornelloContactComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [IlFornelloService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlFornelloHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
