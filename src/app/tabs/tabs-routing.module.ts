import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'devices',
                loadChildren: () => import('../devices/devices.module.js').then(m => m.DevicesPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/devices',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {
}
