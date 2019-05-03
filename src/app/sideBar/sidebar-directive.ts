import {Directive,ElementRef,OnInit} from '@angular/core';

@Directive({
selector:'[bolder]'
})
export class Bolder{

constructor (private elementReference : ElementRef){}
ngOnInit(){	this.elementReference.nativeElement.style.backgroundColor = 'aqua' }	
} 