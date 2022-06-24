import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const initialState = 'todos' as filtrosValidos;

export const _filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state:filtrosValidos, {filter} ) => filter));
; 