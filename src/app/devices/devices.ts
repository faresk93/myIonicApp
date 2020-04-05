import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {DeviceModel} from './device/device.model';
import {DevicesService} from '../services/devices-service';
import {Observable} from 'rxjs';
import {DevicePage} from './device/device.page';

@Component({
    selector: 'page-devices',
    templateUrl: 'devices.html'
})
export class DevicesPage implements OnInit {
    devices$: Observable<DeviceModel[]>;

    constructor(
        private navCtrl: NavController,
        private deviceService: DevicesService,
        private modalController: ModalController
    ) {
    }

    ngOnInit(): void {
        this.devices$ = this.deviceService.getDevices();
    }

    async onLoadDevice(device: DeviceModel) {
        // routing method
        // this.navCtrl.navigateForward(`/tabs/devices/${device.name}`, {
        //     animated: true,
        //     state: {device}
        // });

        // modal method
        const modal = await this.modalController.create({
            component: DevicePage,
            animated: true,
            componentProps: {device}
        });
        return await modal.present();
    }
}
