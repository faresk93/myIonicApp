import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DevicesPage} from './devices';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: DevicesPage,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DevicePageRoutingModule {
}
