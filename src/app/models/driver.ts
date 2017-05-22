import { Companion } from './companion';

export class Driver{
    constructor(
        public name: string,
        public remarks: string,
        public nrOfSeats: number,
        public companions: Companion[]        
    ){}
}