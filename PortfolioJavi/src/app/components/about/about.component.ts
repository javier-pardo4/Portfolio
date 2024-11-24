import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    // Seleccionar los elementos a observar
    const elements = document.querySelectorAll('.about-container, .about-title, .about-container p, .tech-container, .tech-item');
    
    // Configuración del IntersectionObserver
    const options = {
      threshold: 0.3 // Configuración para que el 30% del elemento esté visible antes de disparar la animación
    };

    // Instancia del IntersectionObserver
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    // Observar cada elemento
    elements.forEach(element => observer.observe(element));
  }
}
