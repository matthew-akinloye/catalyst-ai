import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  themes: string[] = [
    "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
    "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi",
    "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn",
    "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset"
  ];


  changeTheme(selectedTheme: string) {
    document.documentElement.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('selectedTheme', selectedTheme);
  }
}
