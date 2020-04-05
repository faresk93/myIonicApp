import {Injectable} from '@angular/core';
import {DeviceModel} from '../devices/device/device.model';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class DevicesService {
    devices: DeviceModel[] = [
        {
            key: 'tv',
            name: 'TV',
            description: 'Brand: LG',
            picture: 'https://www.relocationelectronics.com/media/catalog/product/l/g/lg-60la6210-multisystem-tv.jpg'
        },
        {
            key: 'washing-machine',
            name: 'Washing Machine',
            description: 'Brand: Samsung: Economic machine',
            picture: 'https://brain-images-ssl.cdn.dixons.com/0/9/10161590/l_10161590_004.jpg'
        },
        {
            key: 'call',
            name: 'Smart Phone',
            description: 'Cool smartphone: Samsung S10+',
            picture: 'https://membershipwireless.com/media/catalog/product/s/a/samsung_galaxy_s10__blue_lockup_rgb.png?width=700&height=700&canvas=700:700&quality=80&bg-color=255,255,255&fit=bounds'
        }
    ];

    constructor() {
    }

    getDevices(): Observable<DeviceModel[]> {
        return of(this.devices.slice()).pipe(
            delay(1000)
        );
    }
}
