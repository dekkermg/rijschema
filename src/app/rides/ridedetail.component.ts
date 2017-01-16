import { Component } from '@angular/core';
import { Ride } from 'app/models/ride';
import { UUID } from 'angular2-uuid';
import { RidesService } from '../services/rides.service';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: 'app/rides/ridedetail.component.html'
})
export class RideDetailComponent {
    pageTitle: string = 'Rit details';
    model = new Ride(UUID.UUID(), 'testrit', '20170120', 'testrit', 'rijder', 3);

    constructor(private ridesService: RidesService) {        
    }

    submitForm(form: NgForm) {
        this.ridesService.postRideForm(this.model)
            .subscribe(
                data => console.log('success: ', data),
                err => console.log('error: ', err)
            )
    }
}
