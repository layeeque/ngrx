import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Tutorial } from "../models/tutorials.model";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApicallserviceService {
  private customersUrl = "http://localhost:3000/customers";

  constructor(private http: HttpClient) { }

  callapi(): Observable<Tutorial[]> {
    console.log("service is called ***")
    return this.http.get<Tutorial[]>(this.customersUrl);

  }
}
