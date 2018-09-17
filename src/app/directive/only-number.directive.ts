import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appOnlyNumber]"
})
export class OnlyNumberDirective {
  // Allow decimal numbers and negative values
  private regex: RegExp = new RegExp("^[0-9]*$");

  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ["Backspace", "Tab", "End", "Home", "-"];

  output: string;

  constructor(private el: ElementRef) {}
  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    this.output = this.el.nativeElement.value;
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    } else {
      if (!String(event.key).match(this.regex)) {
        return false;
      }
    }
    this.output = this.output + event.key;
  }
}
