export class Ride {
    constructor(
        public id: AAGUID,
        public name: string,
        public date: string,
        public description: string,
        public participantType: string,
        public nrOfSeats: number
    ) {
                
        }
}