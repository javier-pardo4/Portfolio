import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, AboutComponent, TechnologiesComponent, ProjectsComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  selectedTab: string = 'aboutMe'; // Establecemos 'Sobre mí' como pestaña inicial.

  constructor(private renderer: Renderer2) {}

  // Método para cambiar la pestaña seleccionada
  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  // Método para alternar el modo oscuro y claro
  toggleMode(event: Event) {
    const hostElement = document.querySelector('app-hero');
    if (hostElement) {
      if ((event.target as HTMLInputElement).checked) {
        this.renderer.addClass(hostElement, 'dark-mode');
      } else {
        this.renderer.removeClass(hostElement, 'dark-mode');
      }
    }
  }
}