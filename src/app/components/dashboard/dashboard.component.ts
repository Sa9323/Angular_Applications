import { ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  message: string;

  constructor(private http: HttpClient, private renderer: Renderer2, public authService: AuthService) {

    /**
    * This events get called by all clicks on the page.
    * If the click is not made form the showMenu button or the loginmenu button then
    * hide the respective popups.
  */
    this.renderer.listen('window', 'click', (e: Event) => {

    });
  }

  getAllUsers() {

    /** spinner starts on init */
    this.authService.getAll().subscribe((data: any) => {
      return data
    })
  }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:5000/').subscribe(data => {
      this.message = data['message'];
    });
  }
}