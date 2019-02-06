// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorials.model'

// Section 2
export const ADD_TUTORIAL = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove'
export const ADD_COUNTRY = 'addCountry'
export const CALL_API = 'callapi'
export const CALL_API_SUCCESS = 'callapiSuccess'
export const NGRX_ENTITY = 'ngrxentity'

// Section 3



export class callApi implements Action {
    readonly type = CALL_API

}
export class callApiSuccess implements Action {
    readonly type = CALL_API_SUCCESS
    constructor(public payload: any) { }
}


export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial) { }
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) { }
}
export class AddCountry implements Action {
    readonly type = ADD_COUNTRY

    constructor(public payload: string) {
        console.log("type of payload is ************* " + typeof payload)
    }
}
export class ngrxEntity implements Action {
    readonly type = NGRX_ENTITY
    constructor(public payload: string) { }
}

// Section 4
export type Actions = AddTutorial | RemoveTutorial | AddCountry | callApi | callApiSuccess | ngrxEntity