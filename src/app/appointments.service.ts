import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Appointment } from './appointment';  //interface is not neccessary if we use the other method 

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  
  private url = "http://localhost:3000/api";

  constructor(private http : HttpClient) { }

  /*public getappointments(){
    return this.http.get(`${this.url}/appointments`);
  } 
  or below method*/

  public getappointments():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}/appointments`);
  }

  public updatestatus(vehnum,status){
    const obj={
      status:status                              //just passing the status to api doesn't work.if so request body is empty, So have to pass an object
    }
    return this.http.put(`${this.url}/statusUpdate/${vehnum}`,obj)
    .subscribe(res=>console.log("done status updating"));
  }
}
