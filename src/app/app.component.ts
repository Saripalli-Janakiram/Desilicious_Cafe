import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desilicious_Web';
  images: string[] = [
    '/assets/Images/Home.png',
    '/assets/Images/Banner1.jpg',
    '/assets/Images/Banner2.jpg',
    '/assets/Images/Banner4.jpg',
    '/assets/Images/Banner5.webp'
  ];
   currentIndex = 0;
  currentImage = this.images[0];
  fade = false;

  ngOnInit(): void {
    setInterval(() => {
      this.fade = true; // Start fade out
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.currentImage = this.images[this.currentIndex];
        this.fade = false; // Start fade in
      }, 500); // Match half the duration of fade animation
    }, 5000); // Change image every 5 seconds
  }
  menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

closeMenu() {
  this.menuOpen = false;
}

}
