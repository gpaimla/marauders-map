import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreModule } from './core.module';


@Injectable()
export class DummyService {

    constructor() {

    }

    getData(){
        return "Data";
    }

}
