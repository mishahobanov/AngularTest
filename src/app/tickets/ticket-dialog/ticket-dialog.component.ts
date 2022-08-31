import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { createTickets, updateTickets } from '../state/ticket.actions';
import { TicketsState } from '../state/ticket.reducer';
import { ITicket, Ticket } from '../ticket.model';

export interface DialogInsertElement {
  element: ITicket;
}

@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss'],
})
export class TicketDialogComponent  {

  editMode: boolean = false;

  form: FormGroup;

  editorStyle : {
    height:'300px',
    
  }

  config={
    toolbar:[
      ['bold', 'italic', 'underline', 'strike'], 
      [{ 'header': 1 }, { 'header': 2 }],     
      ['link'] 
    ]
  }
  departments: IDep[] = [
    {identifier: '1', deparmentName: 'Sales departament'},
    {identifier: '2', deparmentName: 'Financial departament'},
    {identifier: '3', deparmentName: 'Technical departament'},
    {identifier: '4', deparmentName: 'Security departament'},

  ];

  constructor(
    private store: Store<TicketsState>,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TicketDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: DialogInsertElement
  ) {
    if (dataDialog.element) {
      this.editMode = true;
    }
    this.form = this.fb.group({
      title: new FormControl(dataDialog.element ? dataDialog.element.title : ''),
      department: new FormControl(
        dataDialog.element ? dataDialog.element.departmentIdentifier : ''
      ),
      message: new FormControl(
        dataDialog.element ? dataDialog.element.message : ''
      ),
      attachment: new FormControl(
        dataDialog.element ? dataDialog.element.attachment : ''
      ),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const obj:Ticket = {
      ...this.dataDialog.element,
      ...this.form.value,
    };

    if (this.editMode) {
      let ticketEdit : Ticket = {
        identifier: obj.identifier,
        departmentIdentifier:obj.departmentIdentifier,
        title:obj.title,
        message:obj.message,
        attachment:obj.attachment,
        status:'Edited',
        createdAt:obj.createdAt,
        updateAt:Date.now().toString()
      }
      this.store.dispatch(
        updateTickets({
          payload: ticketEdit,
        })
      );
    } else {
      let ticketCreate: Ticket = {
        identifier: "a" + Math.random(),
        departmentIdentifier: obj.departmentIdentifier,
        title: obj.title,
        message: obj.message,
        attachment: obj.attachment,
        status: 'New',
        createdAt: Date.now().toString(),
        updateAt:Date.now().toString()
      }
      this.store.dispatch(
        createTickets({
          payload: obj,
        })
      );
    }

    this.dialogRef.close();
  }
  
}

export interface IDep {
  identifier: string;
  deparmentName:string;
}