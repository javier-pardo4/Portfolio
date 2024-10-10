import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Necesitas importar CommonModule en componentes standalone

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Marca el componente como standalone
  imports: [CommonModule]  // Importa los módulos que necesites
})
export class AppComponent implements OnInit {
  title = 'PortfolioJavi';
  
    ngOnInit() {
      particlesJS.load('particles-js', 'assets/particles.json', null);
    }
}
