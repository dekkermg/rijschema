import { Driver } from './driver';
import { Companion } from './companion';
import { Guid } from "guid-typescript";

export class Ride {
    constructor(
        public _id: Guid,
        public name: string,
        public date: string,
        public description: string,
        public drivers: Driver[],
        public companions: Companion[]
    ) {}
}