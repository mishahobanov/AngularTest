import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TicketDialogComponent } from '../ticket-dialog/ticket-dialog.component';
import{getTickets} from '../state/ticket.selector';
import { select, Store } from '@ngrx/store';
import { TicketsState } from '../state/ticket.reducer';
import { ITicket } from '../ticket.model';
import { LoadTickets, LoadTicketsSuccess } from '../state/ticket.actions';


@Component({
  selector: 'app-ticket-home',
  templateUrl: './ticket-home.component.html',
  styleUrls: ['./ticket-home.component.css'],
})
export class TicketHomeComponent implements OnInit {

  tickets$: Observable<ITicket[]> = this.store.pipe(
    select(getTickets)
  );

  // filter$: Observable<UiFilterCrud> = this.store.pipe(select(getFilterCrud));

  title = 'AngularTest';
  constructor(private store: Store<TicketsState>, private dialog : MatDialog){

  }
  ngOnInit() {
    this.store.dispatch(LoadTickets());
  }
  
  openDialog() {
    this.dialog.open(TicketDialogComponent,{
      data: {
        element: null,
      },
    });

    
  }

}
