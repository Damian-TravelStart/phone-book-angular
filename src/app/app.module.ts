import { HttpClientModule } from '@angular/common/http';
import { PhoneBookService } from './phonebook/phonebook.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneBookComponent } from './phonebook/phonebook.component';
import { PhoneBookStore } from './phonebook/phonebook.store';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
  ],
  providers: [PhoneBookStore, PhoneBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
