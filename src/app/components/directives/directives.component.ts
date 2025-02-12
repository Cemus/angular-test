import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgFor, NgIf, NgClass, NgStyle],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  details: boolean = true;
  array: number[] = [];

  toggleDetails(): void {
    this.details = !this.details;
  }

  addCell(): void {
    this.array.push(this.array.length + 1);
  }

  resetArray(): void {
    this.array = [];
  }
}
