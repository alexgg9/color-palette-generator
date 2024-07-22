import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import chroma from 'chroma-js';

@Component({
  selector: 'app-palette',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './palette.component.html',
  styleUrl: './palette.component.css'
})
export class PaletteComponent {
  palette: string[] = [];

  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  generatePalette(): void {
    const startColor = this.generateRandomColor();
    const endColor = this.generateRandomColor();
    this.palette = chroma.scale([startColor, endColor])
                        .mode('lch')
                        .colors(5);
  }

}
