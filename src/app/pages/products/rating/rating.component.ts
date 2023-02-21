import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  stars=[1,2,3,4,5];
  rating = 0;

  starRating(r:any){
    this.rating = r
  }
}

