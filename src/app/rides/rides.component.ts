import { Component } from '@angular/core';
import { Ride } from '../models/ride';

@Component({
    templateUrl: 'app/rides/rides.component.html'
})
export class RidesComponent {
    public pageTitle: string = 'Ritten';
    rides: Ride[] = [
        {
            "id": 1,
            "name": "Noordwijk uit",
            "date": "19 Augustus, 2016",
            "description": "Uit tegen Noordwijk",
            "participantType": "rijder",
            "nrOfSeats": 3
        },
        {
            "id": 2,
            "name": "ASC uit",
            "date": "18 September, 2016",
            "description": "Uit tegen ASC",
            "participantType": "meerijder",
            "nrOfSeats": 1
        }
    ];
}
