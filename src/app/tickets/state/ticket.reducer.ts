import { Action, createReducer, on } from "@ngrx/store";
import { ITicket, Ticket } from "../ticket.model";
import * as fromTicketActions from "./ticket.actions"


export interface TicketsState{
    tickets: ITicket[];
}

export const initialState: TicketsState = {
    tickets : [],
}

const _ticketsReducer= createReducer(
    initialState,
    on(fromTicketActions.LoadTickets,(state)=>({...state})),
    on(fromTicketActions.LoadTicketsSuccess,(state, payload )=>({...state, ticktets: payload})),
    on(fromTicketActions.LoadTicketsFail,(state)=>({...state})),

    on(fromTicketActions.createTicketsSuccess,(state,{ payload })=>({...state, ticktets: [...state.tickets, payload]})),
    on(fromTicketActions.createTicketsFail,(state)=>({...state})),

    on(fromTicketActions.updateTickets, (state) => {
        return { ...state };
      }),
      on(fromTicketActions.updateTicketsSuccess, (state, action) => {
        const index = state.tickets.findIndex(
          (value) => value.identifier === action.payload.identifier
        );
        const updatedItems = [...state.tickets];
        updatedItems[index] = action.payload;
    
        return {
          ...state,
          items: [...updatedItems]
        };
      }),
      on(fromTicketActions.updateTicketsFail, (state) => {
        return { ...state };
      }),
)

export function ticketsReducer(state = initialState, action: Action){
    return _ticketsReducer(state, action);
}


