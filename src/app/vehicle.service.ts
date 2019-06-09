import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private url = "http://localhost:3000/api";

  constructor(private http : HttpClient) { }

  getVehicle(vnum){
    return this.http.get(`${this.url}/getVehicle/${vnum}`)
  }

  updateServiceDetails(id,formdata){
    return this.http.put(`${this.url}/updateservice/${id}`, formdata)
    .subscribe(res => console.log("Done updating service info"))
  }

  addNewService(id,formData){
    return this.http.post(`${this.url}/addService/${id}`,formData)
    .subscribe(res=>console.log("Done adding service"))

  }
}
