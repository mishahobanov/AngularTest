// export interface ITicketRows {
//     identifier: string;
//     departmentIdentifier: string;
//     title: string;
//     status: string;
//     createdAt: string;
//     updateAt: string;
//   }
  export interface ITicket {
    identifier: string;
    departmentIdentifier: string;
    title: string;
    message: string;
    attachment: string;
    status: string;
    createdAt: string;
    updateAt: string;
  }

  export class Ticket implements ITicket {
    identifier: string;
    departmentIdentifier: string;
    title: string;
    message: string;
    attachment: string;
    status: string;
    createdAt: string;
    updateAt: string;
  
    constructor(data: Partial<Ticket> = {}) {
      Object.assign(this, data);
    }
  }

  // export class ITicketRows {
  //   identifier: string;
  //   departmentIdentifier: string;
  //   title: string;
  //   status: string;
  //   createdAt: string;
  //   updateAt: string;
  //   constructor(data: Partial<ITicketRows> = {}) {
  //     Object.assign(this, data);
  //   }
  // }