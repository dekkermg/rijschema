import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Ride } from '../models/ride';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RidesService {
    constructor(private http: Http) {        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.fields || { };
    }

    private handleError(error: any) {
        console.error('post error: ', error);
        return Observable.throw(error.statusText);
    }

    private extractRides(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    getRides() : Observable<any> {
        return this.http.get('http://localhost:3100/rides')
                        .map(this.extractRides)
                        .catch(this.handleError);
    }

    postRideForm(ride: Ride):Observable<any> {
        let body = JSON.stringify(ride);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers });
    
        return this.http.post('http://localhost:3100/ride', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}