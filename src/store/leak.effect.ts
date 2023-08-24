import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { spillMemory, spillMemorySuccess } from './leak.reducer';
import { tap, pipe, map } from 'rxjs';
import { DATA } from '../data-sample';

@Injectable()
export class LeakEffects {
    spillMemory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(spillMemory),
            map(() => spillMemorySuccess({ data: structuredClone(DATA) }))
        )
    );

    constructor(private actions$: Actions) {}
}
