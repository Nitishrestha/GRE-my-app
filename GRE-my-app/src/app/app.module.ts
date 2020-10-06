import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { AddWordComponent } from './add-word/add-word.component';
import { ListWordComponent } from './list-word/list-word.component';
import { EditWordComponent } from './edit-word/edit-word.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    AddWordComponent,
    ListWordComponent,
    EditWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
