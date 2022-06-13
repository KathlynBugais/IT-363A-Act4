import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-mailpage',
  templateUrl: './mailpage.page.html',
  styleUrls: ['./mailpage.page.scss'],
})
export class MailpagePage implements OnInit {

  constructor(public router: Router) { }
  back(){
    this.router.navigateByUrl('contacts');
  }

  ngOnInit() {
  }

}
