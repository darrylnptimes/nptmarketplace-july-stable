import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from './car';

@Injectable()
export class CarService {

constructor(private http: HttpClient) { }

getCarsMedium() {
return this.http.get<any>('assets/cars-medium.json')
.toPromise()
.then(res => <Car[]>res.data)
.then(data => { console.log(data); return data; });
}

getSingleCarsMedium(id) {
return this.http.get<any>('assets/cars-medium.json')
.toPromise()
.then(res => res.data.find(hero => hero.id === id))
.then(data => { console.log(data); return data; });
}

}