import { RouterModule, Routes } from '@angular/router';
import { IlFornelloComponent } from './il-fornello/il-fornello.component';
import { IlFornelloHomeComponent } from './il-fornello-home/il-fornello-home.component';
import { IlFornelloAboutComponent } from './il-fornello-about/il-fornello-about.component';
import { IlFornelloMenuComponent } from './il-fornello-menu/il-fornello-menu.component';
import { IlFornelloContactComponent } from './il-fornello-contact/il-fornello-contact.component';

export const appRoutes: Routes = [
  { path: 'ilfornello', component: IlFornelloComponent, pathMatch: 'full' },
  {
    path: 'ilfornello/home',
    component: IlFornelloHomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'ilfornello/about',
    component: IlFornelloAboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'ilfornello/menu',
    component: IlFornelloMenuComponent,
    pathMatch: 'full'
  },
  {
    path: 'ilfornello/contact',
    component: IlFornelloContactComponent,
    pathMatch: 'full'
  },
  { path: '', redirectTo: 'ilfornello/home', pathMatch: 'full' }
];

export const AppRouting = RouterModule.forRoot(appRoutes, { useHash: true });
