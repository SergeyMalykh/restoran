import { APP_BASE_HREF } from '@angular/common';
import { appRoutes } from './../il-fornello.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlFornelloComponent } from './il-fornello.component';
import { IlFornelloHomeComponent } from '../il-fornello-home/il-fornello-home.component';
import { IlFornelloAboutComponent } from '../il-fornello-about/il-fornello-about.component';
import { IlFornelloMenuComponent } from '../il-fornello-menu/il-fornello-menu.component';
import { IlFornelloContactComponent } from '../il-fornello-contact/il-fornello-contact.component';

describe('IlFornelloComponent', () => {
  let component: IlFornelloComponent;
  let fixture: ComponentFixture<IlFornelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IlFornelloComponent,
        IlFornelloHomeComponent,
        IlFornelloAboutComponent,
        IlFornelloMenuComponent,
        IlFornelloContactComponent
      ],
      imports: [
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlFornelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
