import { Component } from '@angular/core';
import { Ride } from '../models/ride';
import { Driver } from 'app/models/driver';
import { Companion } from 'app/models/companion';
import { UUID } from 'angular2-uuid';
import { RidesService } from '../services/rides.service';

@Component({
    templateUrl: 'app/rides/rides.component.html'
})
export class RidesComponent {
    public pageTitle: string = 'Ritten';
    ridesLoaded: boolean = false;
    rides: Ride[] = [];
    selectedRide = new Ride(UUID.UUID(), "testrit", "20170120", "testrit", new Array<Driver>(), new Array<Companion>());

    constructor(private ridesService: RidesService) {
        this.ridesService.getRides()
            .subscribe(
                data => { this.rides = data; this.ridesLoaded = true; },
                err => console.log('get error: ', err)
            );
    }

    onSelect(ride: Ride): void {
        this.selectedRide = ride;
    }
}
