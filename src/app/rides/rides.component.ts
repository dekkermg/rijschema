import { Component } from '@angular/core';
import { Ride } from '../models/ride';
import { UUID } from 'angular2-uuid';
import { RidesService } from '../services/rides.service';

@Component({
    templateUrl: 'app/rides/rides.component.html'
})
export class RidesComponent {
    public pageTitle: string = 'Ritten';
    ridesLoaded: boolean = false;
    rides: Ride[] = [];

    constructor(private ridesService: RidesService) {
        this.ridesService.getRides()
            .subscribe(
                data => { this.rides = data.rides; this.ridesLoaded = true; },
                err => console.log('get error: ', err)
            );
    }
}
