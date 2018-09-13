import { DotPipe } from './dot.pipe';

describe('DotPipe', () => {

  it('create an instance', () => {
    const pipe = new DotPipe();
    expect(pipe).toBeTruthy();
  });

  it('Se espera que muestre el mismo número cuando tiene 3 cifra o menos', () => {
    const pipe = new DotPipe();
    let result;
    result = pipe.transform('123');
    expect(result).toEqual('123');
  });

  it('Se espera que el número sea formateado a miles cuando tiene 4 cifra', () => {
    const pipe = new DotPipe();
    let result;
    result = pipe.transform('1234');
    expect(result).toEqual('1.234');
  });

  it('Se espera que el número sea formateado a millones cuando tiene 7 cifras', () => {
    const pipe = new DotPipe();
    let result;
    result = pipe.transform('1234567');
    expect(result).toEqual('1.234.567');
  });

  it('Se espera que muestre "0" cuando no se ha ingresado un número', () => {
    const pipe = new DotPipe();
    let result;
    result = pipe.transform('');
    expect(result).toEqual('0');
  });

  it('Se espera que muestre " " cuando no se ha ingresado un número infinito', () => {
    const pipe = new DotPipe();
    let result;
    result = pipe.transform('234567894567894567856789567890');
    expect(result).toEqual('2..34.567.894.567.894.57e.+29');
  });

});
