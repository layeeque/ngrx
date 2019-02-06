import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import * as TutorialActions from "../actions/tutorials.actions";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
 country:string;
  ngOnInit() {
  }
  countryfun(){
    console.log('value of country is '+ this.country)
    this.store.dispatch(new TutorialActions.AddCountry (this.country) )
  }

}
