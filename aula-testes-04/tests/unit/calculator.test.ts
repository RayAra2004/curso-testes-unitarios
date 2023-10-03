import calculator from "./../../src/calculator";


describe("calculator tests - unit", () => {
  it("should subtract two numbers", async () => {

    const result = calculator.sub(6, 4);
    expect(result).toBe(2);
  });
  it("should multiply two numbers", async () => {
    
    const result = calculator.mul(6, 4);

    expect(result).toBe(24);
  });

  it("should divide two numbers", async () => {
    const result = calculator.div(36, 4);
    expect(result).toBe(9);
  });

  it("should return 0 when diving by zero", async () => {
    const result = calculator.div(6, 0);
    expect(result).toBe(0);
  });
})