import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorials.model'
import * as TutorialActions from './../actions/tutorials.actions'
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";



export interface abc extends EntityState<Tutorial> {
    fname: String;
    lname: String;
    mname: String;

}
// Section 1
const initialState: abc = {
    ids: [],
    entities: {},
    fname: '',
    lname: '',
    mname: '',

    // name: 'Initial Tutorial',
    // url: 'http://google.com',
    // country: 'india',
    // loading: false,
    // loaded: false
}
export const customerAdapter: EntityAdapter<Tutorial> = createEntityAdapter<Tutorial>();

// Section 2
export function reducer(state: abc = initialState, action: TutorialActions.Actions) {

    // Section 3
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return customerAdapter.addOne(action.payload,{ ...state});

        // case TutorialActions.REMOVE_TUTORIAL:
        //     state.splice(action.payload, 1)
        //     return state;

        case TutorialActions.ADD_COUNTRY:
            console.log("the value of action payload is " + action.payload)
            console.log("the value of state is " + JSON.stringify(state))
            console.log("the value of state is " + JSON.stringify(state))
            // return {
            //     ...state,
            //     country: action.payload,
            // };

            return {
                ...state,
                country: action.payload,
            };


        case TutorialActions.CALL_API_SUCCESS:
            console.log("the value of action payload is " + action.payload)
            console.log("the value of state is " + JSON.stringify(state))
            return {
                ...state,
                cust: action.payload,
            };
        case TutorialActions.NGRX_ENTITY:
            return customerAdapter.removeOne("faiz", state);


        default:
            return state;
    }
}

const getCustomerFeatureState = createFeatureSelector<Tutorial>(
    "tutorial"
);

export const getCountry = createSelector(
    getCustomerFeatureState,
    (state: Tutorial) => state.country
);