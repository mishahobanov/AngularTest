import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketDialogComponent } from './ticket-dialog/ticket-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTest';
  constructor(private dialog : MatDialog){

  }
  openDialog() {
    const dialogRef = this.dialog.open(TicketDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
