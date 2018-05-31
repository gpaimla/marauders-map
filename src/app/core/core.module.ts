import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DummyService } from './dummy.service';

@NgModule({
    imports: [
    ],
    declarations: [],
    providers: [
       DummyService
    ]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
