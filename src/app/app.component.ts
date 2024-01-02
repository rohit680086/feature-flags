import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTabsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'feature-flags';
  navLinks: any[];
  // activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Features',
            link: './features'
        }, {
            label: 'Companies',
            link: './companies'
        }, {
            label: 'Requests',
            link: './requests'
        }, {
          label: 'Audit',
          link: './audit'
      },
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      // this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}
