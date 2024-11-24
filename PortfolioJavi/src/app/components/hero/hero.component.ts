import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'] // Asegúrate de tener la ruta correcta de tu archivo CSS
})
export class HeroComponent implements OnInit, OnDestroy {
  words: string[] = ['INGENIERO', 'INFORMÁTICO']; // Las palabras a alternar
  displayText: string = ''; // Texto actual que se va mostrando
  currentWordIndex: number = 0; // Índice de la palabra actual
  isDeleting: boolean = false; // Indica si estamos eliminando la palabra
  typingTimeout: any; // Para manejar el retraso entre escritura y eliminación

  ngOnInit() {
    this.startTypingEffect();
  }

  ngOnDestroy() {
    clearTimeout(this.typingTimeout); // Limpiamos el tiempo cuando el componente se destruye
  }

  startTypingEffect() {
    const currentWord = this.words[this.currentWordIndex]; // Palabra actual
    if (this.isDeleting) {
      // Si estamos borrando, eliminamos un carácter de la palabra hasta que quede "I"
      if (this.displayText.length > 1) {
        this.displayText = currentWord.substring(0, this.displayText.length - 1);
      } else {
        this.isDeleting = false;
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      }
    } else {
      // Si no estamos borrando, agregamos un carácter
      this.displayText = currentWord.substring(0, this.displayText.length + 1);
    }

    const typingSpeed = this.isDeleting ? 100 : 200; // Velocidad de escritura/borrado
    if (!this.isDeleting && this.displayText === currentWord) {
      // Cuando la palabra está completa, iniciamos el borrado después de un breve retraso
      this.typingTimeout = setTimeout(() => {
        this.isDeleting = true;
        this.startTypingEffect();
      }, 1000); // Retraso antes de empezar a borrar
    } else {
      // Continuamos escribiendo o borrando la palabra
      this.typingTimeout = setTimeout(() => this.startTypingEffect(), typingSpeed);
    }

    // Actualizamos el contenido del span en HTML con el texto y el cursor
    document.getElementById('typed-text')!.innerHTML = this.displayText + '<span class="cursor"></span>';
  }
}