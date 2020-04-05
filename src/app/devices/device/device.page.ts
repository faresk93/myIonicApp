import {Component, Input, OnInit} from '@angular/core';
import {DeviceModel} from './device.model';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-device',
    templateUrl: './device.page.html',
    styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
    @Input() device: DeviceModel;
    loading = true;

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
        // get route params (router method)
        // this.route.queryParams.subscribe(_ => {
        //     if (this.router.getCurrentNavigation().extras.state) {
        //         this.device = this.router.getCurrentNavigation().extras.state.device;
        //     } else {
        //         this.navCtrl.navigateBack('/tabs/devices');
        //     }
        // });
    }

    onImageLoading(event: CustomEvent) {
        this.loading = false;
    }

    dismissModal() {
        this.modalCtrl.dismiss();
    }
}
