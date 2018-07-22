import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IlFornelloComponent } from './il-fornello/il-fornello.component';
import { IlFornelloHomeComponent } from './il-fornello-home/il-fornello-home.component';
import { IlFornelloAboutComponent } from './il-fornello-about/il-fornello-about.component';
import { IlFornelloMenuComponent } from './il-fornello-menu/il-fornello-menu.component';
import { IlFornelloContactComponent } from './il-fornello-contact/il-fornello-contact.component';
import { AppRouting } from './il-fornello.routing';
import { IlFornelloService } from './il-fornello.service';

@NgModule({
  declarations: [
    AppComponent,
    IlFornelloComponent,
    IlFornelloHomeComponent,
    IlFornelloAboutComponent,
    IlFornelloMenuComponent,
    IlFornelloContactComponent
  ],
  imports: [BrowserModule, AppRouting, RouterModule, FormsModule, ReactiveFormsModule, RouterModule], // , ModalModule.forRoot(), BsDropdownModule.forRoot()],
  providers: [IlFornelloService],
  bootstrap: [AppComponent]
})
export class AppModule {}
