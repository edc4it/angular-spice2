import { Component, OnInit } from '@angular/core';
import {ReviewImpl} from "../recipe-service/recipe";

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  constructor() { }

  review  = new ReviewImpl("",5,"",new Date());

  submitReview(){
    console.log("review",this.review)
  }

  ngOnInit() {
  }

}
