import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import  * as TutorialActions from  "../actions/tutorials.actions";
@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  effectCall() {
    console.log("in the effect call")
    // this.store.dispatch( {type: "CALL_API"});
    this.store.dispatch(new TutorialActions.callApi() );

  }

}
