import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor() {}

  ngOnInit() {
    // Nothing needed here anymore as we're using click handlers
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    
    const target = document.getElementById(sectionId);
    const navElement = document.querySelector('.nav') as HTMLElement;
    
    if (target && navElement) {
      const navHeight = navElement.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: targetPosition - navHeight,
        behavior: 'smooth'
      });
    }
  }
}
