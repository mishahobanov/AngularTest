import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'  
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {QuillModule} from 'ngx-quill';


import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDialogComponent } from './ticket-dialog/ticket-dialog.component';
import { TicketFilterComponent } from './ticket-filter/ticket-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketDialogComponent,
    TicketFilterComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    QuillModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
