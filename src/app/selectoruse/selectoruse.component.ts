import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../app.state";
import { Tutorial } from "../models/tutorials.model";
import * as fromReducer from "../reducers/tutorials.reducer";
import * as util from 'util' // has no default export
import { inspect } from 'util'
import * as TutorialActions from './../actions/tutorials.actions';

@Component({
  selector: 'app-selectoruse',
  templateUrl: './selectoruse.component.html',
  styleUrls: ['./selectoruse.component.css']
})
export class SelectoruseComponent implements OnInit {
  tutorialcountry$: Observable<String>;
  constructor(private store: Store<AppState>) { }

  // using non observable variable
  // ngOnInit() {
  //   this.tutorialcountry$ = this.store.pipe(select(fromReducer.getCountry)) .subscribe((item) => {
  //     console.log("the value of item is " + item)
  //     this.tutorialcountry$  = item;
  //   });
  // }

  // using observable variable
  ngOnInit() {
    this.tutorialcountry$ = this.store.pipe(select(fromReducer.getCountry))
  }

  ngrxEntity() {
    this.store.dispatch(new TutorialActions.ngrxEntity("faiz") )
  }
}
