import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appOnlyNumber]"
})
export class OnlyNumberDirective {
  // Allow decimal numbers and negative values
  //private regex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
  private regex: RegExp = new RegExp("^[0-9]*$");

  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ["Backspace", "Tab", "End", "Home", "-"];

  constructor(private el: ElementRef) {}
  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let current: string = this.el.nativeElement.value;
    console.log('evento ', event.key);
    console.log('elemento ', this.el.nativeElement.value);
    let next: string = current.concat(event.key);
    this.el.nativeElement.value = next;
    console.log('next', next);
    
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}

