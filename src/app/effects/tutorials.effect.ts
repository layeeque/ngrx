import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { ApicallserviceService } from "../services/apicallservice.service";
import * as tutorialsActions from "../actions/tutorials.actions";
import { Tutorial } from "../models/tutorials.model";

@Injectable()
export class tutorialEffect {
  constructor(
    private actions$: Actions,
    private Apicallservice: ApicallserviceService
  ) { }

  @Effect()
  loadtutorials$: Observable<Action> = this.actions$.pipe(
    ofType<tutorialsActions.callApi>(
      tutorialsActions.CALL_API
    ),
    mergeMap((action: tutorialsActions.callApi) =>
      this.Apicallservice.callapi().pipe(
        map(
          (Tutorial: any) =>
            new tutorialsActions.callApiSuccess(Tutorial)
        )
      )
    )
  );
}