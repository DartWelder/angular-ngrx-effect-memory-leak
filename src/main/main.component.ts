import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { spillMemory } from '../store/leak.reducer';

@Component({
    selector: 'my-app',
    templateUrl: './main.component.html',
})
export class App {
    constructor(private store: Store) {}

    onClick(): void {
        console.log('onclick');
        this.store.dispatch(spillMemory());
    }
}
