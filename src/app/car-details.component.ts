import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Car } from './car';
import { CarService } from './carservice';
import { Router } from '@angular/router';

@Component({
selector: 'app-car-details',
templateUrl: './car-details.component.html',
styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

hero: any;

constructor(
private heroService: CarService,
private route: ActivatedRoute,
private location: Location,
private router: Router
) {}

ngOnInit(): void {
this.route.params.subscribe(
params => {
this.heroService.getSingleCarsMedium(params['id']).then(cars => {
this.hero = cars;
});

}
);

// this.route.paramMap
// .switchMap((params: ParamMap) => this.heroService.getCarsMedium(+params.get('id')))
// .subscribe(hero => this.hero = hero);
}

goBack(): void {
this.location.back();
}

gotoPop(): void {
    this.router.navigate(['/c2', ]);
    }

}