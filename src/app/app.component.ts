import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';

  top:any;
  left:any;
  expand=false;

  constructor(private spinner: NgxSpinnerService) {}


  @HostListener('document:mousemove', ['$event'])
    onMousemove($event: { pageY: number; pageX: number; }) {
      this.top=($event.pageY - 10)+ "px";
      this.left= ($event.pageX - 10)+ "px";
  }

  ngOnInit() {
    sessionStorage.setItem('shown', true.toString());

    if (sessionStorage.getItem('shown') != 'true') this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }


  ngOnDestroy() {
    sessionStorage.clear();
  }
}
