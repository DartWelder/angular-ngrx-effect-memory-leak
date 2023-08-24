import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LeakEffects } from './store/leak.effect';
import { App } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { leakReducer, ILeakState } from './store/leak.reducer';

export interface IState {
    readonly leak: ILeakState;
}

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        StoreModule.forRoot<IState>({
            leak: leakReducer,
        }),
        EffectsModule.forRoot([LeakEffects]),
    ],
    providers: [],
    declarations: [App],
    bootstrap: [App],
})
export class MainModule {}
