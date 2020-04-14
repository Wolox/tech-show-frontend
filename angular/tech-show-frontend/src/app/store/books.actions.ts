import { createAction, props } from '@ngrx/store';

export const setBooks = createAction('[Books] Set Books', props<{ books: any }>());
