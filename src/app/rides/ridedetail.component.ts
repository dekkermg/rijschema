import { Component } from '@angular/core';
import { Ride } from 'app/models/ride';
import { Driver } from 'app/models/driver';
import { Companion } from 'app/models/companion';
import { UUID } from 'angular2-uuid';
import { RidesService } from '../services/rides.service';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: 'app/rides/ridedetail.component.html'
})
export class RideDetailComponent {
    pageTitle: string = "Rit details";
    model = new Ride(UUID.UUID(), "testrit", "20170120", "testrit", new Array<Driver>(), new Array<Companion>());
    driver = new Driver("Martin","",4, new Array<Companion>());
    companion = new Companion("Liam", "");
    participantType: string;

    constructor(private ridesService: RidesService) {        
    }

    submitForm(form: NgForm) {
        if (this.participantType === "rijder")
        {
            this.model.drivers.push(this.driver);
        }
        else
        {
            this.model.companions.push(this.companion);
        }
        this.ridesService.postRideForm(this.model)
            .subscribe(
                data => console.log('success: ', data),
                err => console.log('error: ', err)
            )
    }
}
