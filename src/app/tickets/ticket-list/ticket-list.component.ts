import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ITicket } from '../ticket.model';

import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { TicketsState } from '../state/ticket.reducer';
import { TicketDialogComponent } from '../ticket-dialog/ticket-dialog.component';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketListComponent implements AfterViewInit {
  @Input() items: ITicket[] | null;

  displayedColumns: string[] = ['identifier', 'createdAt','updateAt','departmentIdentifier', 'title', 'status','details'];
  
  dataSource: MatTableDataSource<ITicket> = new MatTableDataSource();
  resultsLength = 0;

  constructor(private dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    private store: Store<TicketsState>) {

    this.items = [];

     }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['items'] &&
      changes['items'].currentValue &&
      !changes['items'].firstChange
    ) {
      this.dataSource = new MatTableDataSource(this.items || []);
      this.resultsLength = this.dataSource.data.length;
      this.cdRef.detectChanges();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.items || [];
    this.resultsLength = this.dataSource.data.length;
    this.cdRef.detectChanges();
  }

  onUpdateElement(element: ITicket) {
    this.dialog.open(TicketDialogComponent, {
      data: {
        element: element,
      },
    });
  }

}
