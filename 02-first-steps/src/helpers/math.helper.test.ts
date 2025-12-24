import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe("add", () => {
  test("should add two positives numbers", () => {
    //! 1. Arrange => 1er paso = preparacion
    const a = 1;
    const b = 1;

    //! 2. Act  =>  2do paso = Actuar = estimulos
    const result = add(a, b);
    //! 3. Assert  =>  3er paso = verificacion
    expect(result).toBe(a + b);

    // const result = add(1, 3);
    // expect(result).toBe(4);

    // console.log({result});
    // if( result !== 2) {
    //     throw new Error('El resultado no es 2');
    // }
  });
  test("should add two positives numbers", () => {
    //! 1. Arrange => 1er paso = preparacion
    const a = 1;
    const b = 1;

    //! 2. Act  =>  2do paso = Actuar = estimulos
    const result = add(a, b);
    //! 3. Assert  =>  3er paso = verificacion
    expect(result).toBe(a + b);
  });
});

describe("subtract", () => {
  test("restar dos numeros iguales", () => {
    //! Arrange
    const q = 3;
    const w = 3;

    //! action
    const resultado = subtract(q, w);

    //!Assert
    expect(resultado).toBe(q - w);
  });

  test("restar dos numeros para que de negativo", () => {
    //! Arrange
    const q = 1;
    const w = 7;

    //! action
    const resultado = subtract(q, w);

    //!Assert
    expect(resultado).toBe(q - w);
  });
});

describe("multiply", () => {
    test("multiplicando por cero", () =>{
        //! Arrange
        const f = 5;
        const g = 0;

        //! Action
        const producto = multiply(f, g);

        //! Assert
        expect(producto).toBe(f * g);

    })

    test("multiplicando dos numeros", () =>{
        //! Arrange
        const z = 4;
        const x = 5;

        //! Action
        const producto = multiply(z, x);

        //! Assert
        expect(producto).toBe(z * x);
    })

})