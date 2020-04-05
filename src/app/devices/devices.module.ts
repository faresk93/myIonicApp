import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DevicePageRoutingModule} from './devices-routing.module';

import {DevicePage} from './device/device.page';
import {DevicesPage} from './devices';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DevicePageRoutingModule
    ],
    declarations: [DevicePage, DevicesPage],
    entryComponents: [
        DevicePage
    ]
})
export class DevicesPageModule {
}
