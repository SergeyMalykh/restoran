import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './il-fornello.routing';
import { RouterModule } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { IlFornelloComponent } from './il-fornello/il-fornello.component';
import { IlFornelloHomeComponent } from './il-fornello-home/il-fornello-home.component';
import { IlFornelloAboutComponent } from './il-fornello-about/il-fornello-about.component';
import { IlFornelloMenuComponent } from './il-fornello-menu/il-fornello-menu.component';
import { IlFornelloContactComponent } from './il-fornello-contact/il-fornello-contact.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
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

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

});
