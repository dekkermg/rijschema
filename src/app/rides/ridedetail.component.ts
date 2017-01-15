import { Component } from '@angular/core';
import { Ride } from 'app/models/ride';
//import { UUID } from 'angular2-uuid';

@Component({
    templateUrl: 'app/rides/ridedetail.component.html'
})
export class RideDetailComponent {
    pageTitle: string = 'Rit details';
    model = new Ride(1, 'testrit', '20170120', 'testrit', 'rijder', 3);
}
