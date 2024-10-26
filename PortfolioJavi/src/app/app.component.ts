import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Necesitas importar CommonModule en componentes standalone
import { HeaderComponent } from './components/header/header.component'; // Importa tu componente
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';


declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Marca el componente como standalone
  imports: [CommonModule, HeaderComponent, HeroComponent, AboutComponent, ContactComponent, ProjectsComponent, FooterComponent]  // Importa los módulos que necesites
})
export class AppComponent implements OnInit {
  title = 'PortfolioJavi';
  
    ngOnInit() {
      
    }
}
