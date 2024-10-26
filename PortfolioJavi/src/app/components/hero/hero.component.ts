import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  words: string[] = ['INGENIERO', 'INFORMATICO'];
  displayText: string = '';
  currentWordIndex: number = 0;
  isDeleting: boolean = false;
  typingTimeout: any;

  ngOnInit() {
    this.startTypingEffect();
  }

  ngOnDestroy() {
    clearTimeout(this.typingTimeout);
  }

  startTypingEffect() {
    const currentWord = this.words[this.currentWordIndex];

    if (this.isDeleting) {
      this.displayText = currentWord.substring(0, this.displayText.length - 1);
    } else {
      this.displayText = currentWord.substring(0, this.displayText.length + 1);
    }

    const typingSpeed = this.isDeleting ? 100 : 200;

    if (!this.isDeleting && this.displayText === currentWord) {
      this.typingTimeout = setTimeout(() => {
        this.isDeleting = true;
        this.startTypingEffect();
      }, 1000);
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      this.typingTimeout = setTimeout(() => this.startTypingEffect(), 500);
    } else {
      this.typingTimeout = setTimeout(() => this.startTypingEffect(), typingSpeed);
    }
  }
}