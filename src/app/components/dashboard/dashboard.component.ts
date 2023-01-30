import { ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private renderer: Renderer2, public authService: AuthService) {

    /**
    * This events get called by all clicks on the page.
    * If the click is not made form the showMenu button or the loginmenu button then
    * hide the respective popups.
  */
    this.renderer.listen('window', 'click', (e: Event) => {

      if (e.target !== this.showLoginMenu.nativeElement) {
        this.isLoginPopupShown = false;
      }
    });
  }

  lastLoginTime: string;
  username: string;
  isLoginPopupShown: boolean = false;

  @ViewChild('showLoginMenu') showLoginMenu: ElementRef;

  ngOnInit(): void { }
}