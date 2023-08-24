import { Action, createReducer, on, createAction, props } from '@ngrx/store';

export const spillMemory = createAction('spillMemory');
export const spillMemorySuccess = createAction(
    'spillMemorySuccess',
    props<{ data: any }>()
);

export interface ILeakState {
    value: any;
}

const initialState: ILeakState = {
    value: null,
};

export const leakReducer = createReducer(
    initialState,
    on(spillMemorySuccess, (state, { data }) => {
        console.log(data);
        return { value: data };
    })
);

export function reducer(state: ILeakState, action: Action): ILeakState {
    return leakReducer(state, action);
}
