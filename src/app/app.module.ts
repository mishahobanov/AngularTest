import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'  
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDialogComponent } from './ticket-dialog/ticket-dialog.component';
import { TicketFilterComponent } from './ticket-filter/ticket-filter.component';
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
