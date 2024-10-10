import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Juan Pérez';
  profession = 'Ingeniero Informático';
  field = 'Especializado en Tecnología de la Información';
  aboutMe = 'Soy un apasionado de la tecnología, con experiencia en desarrollo de software, seguridad informática y administración de sistemas.';

  education = [
    { degree: 'Ingeniería Informática', institution: 'Universidad X', year: '2015-2020' },
    { degree: 'Maestría en Tecnología de la Información', institution: 'Instituto Y', year: '2021-2023' }
  ];

  email = 'juanperez@example.com';

  socials = [
    { name: 'GitHub', link: 'https://github.com/juanperez' },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/juanperez' }
  ];

  downloadCV() {
    window.open('assets/CV_JuanPerez.pdf', '_blank');
  }
}
