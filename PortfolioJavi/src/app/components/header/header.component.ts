import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false; // Estado del menú

  // Alternar el menú (abrir/cerrar)
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Cerrar el menú al hacer clic en una opción
  closeMenu() {
    this.isMenuOpen = false;
  }
}
