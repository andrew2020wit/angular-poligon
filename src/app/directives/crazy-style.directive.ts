import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appCrazyStyle]'
})
export class CrazyStyleDirective implements OnInit {
  @Input() crazySize: string;
  @Input() crazyColor: string;

  constructor(private elementRef: ElementRef) {
    this.crazySize = this.crazySize || '20px';
    this.crazyColor = this.crazyColor || 'yellow';
  }

  ngOnInit(): void {
    this.setStyle(this.crazySize, this.crazyColor);
  }


  setStyle(size: string, color: string): void {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.elementRef.nativeElement.style.fontSize = size;
    this.elementRef.nativeElement.style.color = color;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setStyle('30px', 'red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setStyle('20px', 'green');
  }


}
