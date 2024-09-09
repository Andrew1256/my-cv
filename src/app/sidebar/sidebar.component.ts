import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']  // Виправлено на styleUrls
})
export class SidebarComponent {
  isActive = false;
  textElements: NodeListOf<HTMLElement> | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.textElements = document.querySelectorAll('.text') as NodeListOf<HTMLElement>;
      
      if (this.textElements) {
        this.textElements.forEach((element) => {
          element.style.opacity = '0';
          element.style.transition = 'opacity 0.1s ease';  // Виправлено на transition
        });
      }
    }
  }

  toggleSidebar() {
    this.isActive = !this.isActive;
    if (this.textElements) {
      this.textElements.forEach((element) => {
        element.style.opacity = element.style.opacity === '0' ? '1' : '0';
      });
    }
  }
}
