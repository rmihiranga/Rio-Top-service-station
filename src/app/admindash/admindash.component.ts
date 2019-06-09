import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

/*importing services*/
import { PostService } from '../post.service';
import { AppointmentsService } from '../appointments.service';

/*importing interfaces*/
import { Post } from '../post';
import { Appointment } from '../appointment';   //not neccessary if we use the other method

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.sass'],
  providers: [PostService]

})
export class AdmindashComponent implements OnInit {

  result1: any[];
  numposts: number;
  numveh: number;
  numusers: number;
  numapp: number;
  
  appointments: Appointment[];
  post: Post;
  myDate: Date;
  today: String;

  Gcount = 0;
  Scount = 0;
  Pcount = 0;
  Fcount = 0;

  constructor(private router: Router, private translate: TranslateService, private _postservice: PostService, private _appointmentservice: AppointmentsService) { }

  /*doughnut chart data*/
  public doughnutChartLabels = ['Gold', 'Silver', 'Platinum', 'Free'];
  public doughnutChartData = [this.Gcount, this.Scount, this.Pcount, this.Fcount];
  public doughnutChartType = 'doughnut';

  /*bar chart data*/
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];


  ngOnInit() {

    setInterval(() => {         //replaced function() by ()=>
      this.myDate = new Date();
    }, 1000);

    this._postservice.getcount()
      .subscribe((resnumber: any[]) => {
        this.result1 = resnumber;
        this.numposts = this.result1[0];
        this.numusers = this.result1[1];
        this.numveh = this.result1[2];
        this.numapp = this.result1[3]
      });
    console.log("got #posts");


    this._appointmentservice.getappointments()
      .subscribe((resappn: Appointment[]) => {
        this.appointments = resappn;
        console.log(this.appointments);
        this.today = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        //console.log(resappn[0].package);  can directly use resappn if so we don't need Appointment interface

        this.appointments.forEach(element => {
          if (element.package == "Gold" && this.today == String(element.date)) {
            this.Gcount++;
          } else if (element.package == "Silver" && this.today == String(element.date)) {
            this.Scount++;
          } else if (element.package == "Platinum" && this.today == String(element.date)) {
            this.Pcount++;
          } else if (element.package == "Free" && this.today == String(element.date)) {
            this.Fcount++;
          }
        });
        this.doughnutChartData = [this.Gcount, this.Scount, this.Pcount, this.Fcount];
      });

    console.log("got appointments");
  }


  managestock() {
    console.log("stock");
    this.router.navigate(["stock"]);
  }

  genreports() {
    console.log("report");
    this.router.navigate(["report"]);
  }

  done(vehnum) {
    console.log(vehnum)
    this._appointmentservice.updatestatus(vehnum,"completed")
  }

  decline(vehnum) {
    this._appointmentservice.updatestatus(vehnum,"canceled")
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
