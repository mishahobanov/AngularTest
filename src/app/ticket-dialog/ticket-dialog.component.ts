import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss']
})
export class TicketDialogComponent  {

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
  
}

export interface IDep {
  identifier: string;
  deparmentName:string;
}