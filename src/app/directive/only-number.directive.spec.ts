import { OnlyNumberDirective } from './only-number.directive';
import { DebugElement, ElementRef } from '@angular/core';

fdescribe('OnlyNumberDirective', () => {

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

  // it('No debería recibir letras', () => {
  //   let element = new MockElementRef();
  //   let onlyNumber = new OnlyNumberDirective(element);
  //   const event = {
  //     keyCode: '1234',
  //     ctrlKey: true,
  //     preventDefault: () => {},
  //   };
  //   let isPreventDefaultCalled = false;
  //   event.preventDefault = () => {
  //     isPreventDefaultCalled = true;
  //   }
  //   onlyNumber.onKeyDown(<KeyboardEvent>event)
  //   expect(isPreventDefaultCalled).toBeFalsy();
  // });


});
