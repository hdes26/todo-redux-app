import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
    '[Filter] Set Filter',
    props<{filter:filtrosValidos}>()
    );
