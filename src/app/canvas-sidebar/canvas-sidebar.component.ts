import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatSidenavModule } from '@angular/material';

@Component({
  selector: 'app-canvas-sidebar',
  templateUrl: './canvas-sidebar.component.html',
  styleUrls: ['./canvas-sidebar.component.scss']
})
export class CanvasSidebarComponent implements OnInit {

    isOpened: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    toggleSidebar() {
        console.log('toggleSidebar clicked');
        this.isOpened = !this.isOpened;
        console.log(this.isOpened);
    }

}


