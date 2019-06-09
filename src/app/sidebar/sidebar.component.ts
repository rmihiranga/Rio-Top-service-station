import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router,private translate:TranslateService) { }

  ngOnInit() {
  }

  managestock() {
    console.log("stock");
    this.router.navigate(["stock"]);
  }

  genreports() {
    console.log("report");
    this.router.navigate(["report"]);
  }

  admindash() {
    console.log("dashboard");
    this.router.navigate(["admindash"]);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
