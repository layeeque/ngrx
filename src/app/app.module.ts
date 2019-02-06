import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorials.reducer';
import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { CountryComponent } from './country/country.component';
import { FormsModule } from '@angular/forms';
import { ApicallComponent } from './apicall/apicall.component';
import { EffectsModule } from "@ngrx/effects";
import { tutorialEffect } from "./effects/tutorials.effect";
import { HttpClientModule } from "@angular/common/http";
import { SelectoruseComponent } from './selectoruse/selectoruse.component';
// import { Observable} from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    CountryComponent,
    ApicallComponent,
    SelectoruseComponent
  ],
  imports: [
    BrowserModule, 
    StoreModule.forRoot({
      tutorial: reducer
    }),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    EffectsModule.forRoot([tutorialEffect]),
    // EffectsModule.forFeature([tutorialEffect]),
    HttpClientModule,
    // Observable
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
