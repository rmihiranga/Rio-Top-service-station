import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../appointments.service';
import { VehicleService } from '../vehicle.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.sass']
})
export class ReportComponent implements OnInit {

    name_vehicle: any;
    vehicle_details:any;
    today: String;
    index=0;

    constructor(private _appointmentservice: AppointmentsService, private modalService: NgbModal, private _vehicleservice: VehicleService) { }

    ngOnInit() {
        this.today = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        this._appointmentservice.getappointments()
            .subscribe((usernameAndVehivlenum) => {
                this.name_vehicle = usernameAndVehivlenum;
          })
    }

    /*bootstrap modal component*/
    openLg(content) {
        this.modalService.open(content, { size: 'lg' });
    }

    getvehDetails(vnum) {
        this._vehicleservice.getVehicle(vnum)
        .subscribe((vehicleDetails)=>{
          this.vehicle_details = vehicleDetails;
          console.log(this.vehicle_details);
        })
    }

    updateService(id,form){
       var formData=form.value;
       this._vehicleservice.updateServiceDetails(id,formData);
    }


    getColor(status){
        if (status=="canceled"){
            return 'red'
        }else{
            return 'green'
        }
    }

    addService(id,form){
        var formData = form.value;
        this._vehicleservice.addNewService(id,formData);
    }
}
