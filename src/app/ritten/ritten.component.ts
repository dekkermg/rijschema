import { Component } from '@angular/core';
import { IRit } from './rit';

@Component({
    templateUrl: 'app/ritten/ritten.component.html'
})
export class RittenComponent {
    public pageTitle: string = 'Ritten';
    ritten: IRit[] = [
        {
            "ritId": 1,
            "ritNaam": "Noordwijk uit",
            "ritCode": "NWK",
            "ritDatum": "19 Augustus, 2016",
            "omschrijving": "Uit tegen Noordwijk",
            "afstand": 20,
            "prijsPerKilometer": 0
        },
        {
            "ritId": 2,
            "ritNaam": "ASC uit",
            "ritCode": "ASC",
            "ritDatum": "18 September, 2016",
            "omschrijving": "Uit tegen ASC",
            "afstand": 5,
            "prijsPerKilometer": 0
        }
    ];
}
