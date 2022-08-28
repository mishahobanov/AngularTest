import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  displayedColumns: string[] = ['identifier', 'createdAt','updateAt','departmentIdentifier', 'title', 'status','details'];
  dataSource = new MatTableDataSource<ITicketRows>(ELEMENT_DATA);
  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

}

const ELEMENT_DATA: ITicketRows[] = [
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'Edited',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},
  {identifier: 'ab0d253', departmentIdentifier: 'Sales department', title: 'Lorem ipsum dolor sit amet',status:'New',createdAt:'01.09.19 12:35',updateAt:'01.09.19 12:35'},

];
export interface ITicketRows {
  identifier: string;
  departmentIdentifier: string;
  title: string;
  status: string;
  createdAt: string;
  updateAt: string;
}
export interface ITicket {
  identifier: string;
  departmentIdentifier: string;
  title: string;
  messages: string;
  attachments: string;
  status: string;
  createdAt: string;
  updateAt: string;
}