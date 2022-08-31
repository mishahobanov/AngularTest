import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TicketsState } from "./ticket.reducer";

export const getTicketsFeatureState = createFeatureSelector<TicketsState>(
    'tickets'
)

export const getTickets = createSelector(
    getTicketsFeatureState,
    (state: TicketsState) => state.tickets
)
