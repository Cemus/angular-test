import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgFor, NgIf, NgClass, NgStyle],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  details: boolean = false;
  array: number[] = [];

  toggleDetails(): void {
    if (this.details) {
      this.addCell();
    }
    this.details = !this.details;
  }

  addCell(): void {
    this.array.push(this.array.length + 1);
  }
}
