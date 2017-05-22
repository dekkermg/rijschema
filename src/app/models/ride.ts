import { Driver } from './driver';
import { Companion } from './companion';

export class Ride {
    constructor(
        public _id: AAGUID,
        public name: string,
        public date: string,
        public description: string,
        public participantType: string,
        public drivers: Driver[],
        public companions: Companion[]
    ) {}
}