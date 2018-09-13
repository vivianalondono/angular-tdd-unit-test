import { OnlyNumberDirective } from './only-number.directive';
import { DebugElement, ElementRef } from '@angular/core';

describe('OnlyNumberDirective', () => {

  class MockElementRef extends ElementRef {
    constructor() {
      super(null);
    }
  }

  it('should create an instance', () => {
    let element = new MockElementRef();
    const directive = new OnlyNumberDirective(element);
    expect(directive).toBeTruthy();
  });

});
