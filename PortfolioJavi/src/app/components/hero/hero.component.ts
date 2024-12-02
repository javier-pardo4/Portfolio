import { Component } from '@angular/core';
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

  // Método para cambiar la pestaña seleccionada
  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  // Método para redirigir según el botón clickeado
  redirectToLink(event: any) {
    const link = event.target.getAttribute('data-link');
    if (link) {
      window.open(link, '_blank'); // Redirige al enlace en una nueva pestaña
    }
  }
}
