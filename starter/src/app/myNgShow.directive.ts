import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[myNgShow]' })
export class MyNgShowDirective {

    constructor(public el: ElementRef, public renderer: Renderer) {}

    @Input() myNgShow: boolean;

    ngOnInit(){
        // Use renderer to render the element with styles
        if(this.myNgShow) {
            this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block')
        } else {
            this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none')
        }
    }
}