import { ActionReducerMap } from "@ngrx/store";
import { TicketsEffects } from "./ticket.effects";
import { ticketsReducer, TicketsState } from "./ticket.reducer";


export interface AppState{
    tickets: TicketsState
}

export const appReducer: ActionReducerMap<AppState> = {
    tickets: ticketsReducer
}

export const appEffects = [
    TicketsEffects
]