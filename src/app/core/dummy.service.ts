import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';


@Injectable()
export class DummyService {

    constructor() {

    }

    getData() {
        return "Data";
    }

}
