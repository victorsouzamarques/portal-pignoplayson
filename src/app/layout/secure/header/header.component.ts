import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userEmail: string;
  constructor(public router: Router) { }

  ngOnInit() {
    
  }

  logout(){
    localStorage.setItem("currentUser", "false");
    this.router.navigate(['/login']);
  }

}
