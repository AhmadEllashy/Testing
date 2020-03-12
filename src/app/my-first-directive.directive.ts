import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[ChangeCases]'
})
export class MyFirstDirectiveDirective {

  constructor(private ref: ElementRef) { }

  @Input("MyFormat") Format 


  @HostListener("focus") Focus() {

  }
  @HostListener("blur") Blur() {

    let element_Value: string = this.ref.nativeElement.value;
    if (this.Format === "Upper") {
      this.ref.nativeElement.value = element_Value.toUpperCase();
    }
    else if (this.Format === "Lower") {
      this.ref.nativeElement.value = element_Value.toLowerCase();

    }

  }

  
}
