import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',  // Được sử dụng như một thuộc tính HTML
  standalone: false,
})
export class HighlightDirective {
  @Input() highlightColor: string = 'yellow';

  constructor(private el: ElementRef) {
    console.log('HighlightDirective initialized!', this.el.nativeElement);
  }

  //Lắng nghe sự kiện di chuột vào
  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse entered!');
    this.el.nativeElement.style.backgroundColor = this.highlightColor; //Cập nhật màu nền
    this.el.nativeElement.style.color = 'red'; //Cập nhật chữ
  }

  //Lắng nghe sự kiện di chuột ra
  @HostListener('mouseleave') onMouseLeave() {
    console.log('Mouse left!');
    this.el.nativeElement.style.backgroundColor = null;
    this.el.nativeElement.style.color = null;
  }
}
