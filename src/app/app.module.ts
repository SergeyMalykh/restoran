import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IlFornelloComponent } from './il-fornello/il-fornello.component';
import { IlFornelloHomeComponent } from './il-fornello-home/il-fornello-home.component';
import { IlFornelloAboutComponent } from './il-fornello-about/il-fornello-about.component';
import { IlFornelloMenuComponent } from './il-fornello-menu/il-fornello-menu.component';
import { IlFornelloContactComponent } from './il-fornello-contact/il-fornello-contact.component';
import { AppRouting } from './il-fornello.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  imports: [BrowserModule, AppRouting, FormsModule, ReactiveFormsModule], // , ModalModule.forRoot(), BsDropdownModule.forRoot()],
  providers: [IlFornelloService],
  bootstrap: [AppComponent]
})
export class AppModule {}
