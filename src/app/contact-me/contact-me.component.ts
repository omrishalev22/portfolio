import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  title:string =" My Phone Number";
  value:string ="+972-0548120818";
  url:string="tel:+0548120818";
  constructor() { }

  ngOnInit() {
  }

  changeToPhoneDiv()
  {
    this.title=" My Phone Number";
    this.value="+972-0548120818";
    this.url="tel:+0548120818"

  }

  changeToEmailDiv()
  {
    this.title=" My Email";
    this.value="omrimexico@gmail.com";
    this.url="javascript:;"

  }

  changeToLinkdinDiv()
  {
    this.title=" My Linkedin";
    this.value="/omri-shalev";
    this.url="https://il.linkedin.com/in/omri-shalev-832b4a134";
  }

}
