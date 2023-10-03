import supertest from "supertest";
import app from "../../src/app";
import { MathBody } from "../../src/validator";

const api = supertest(app);

describe("calculator tests - integration", () => {
  it("when missing params, should return status 422", async () => {
    const mathBody = { // missing properties on purpose
      operation: "sum",
    };

    const { status } = await api.post("/math").send(mathBody);
    expect(status).toBe(422);
  });

  it("if operation is invalid, should return status 400", async () => {
    const mathBody = {
      operation: "not",
      n1: 2,
      n2: 2
    };

    const { status } = await api.post("/math").send(mathBody);
    expect(status).toBe(400);
  });

  it("should sum two numbers", async () => {
    const mathBody: MathBody = {
      operation: "sum",
      n1: 2,
      n2: 2
    };

    const { status, body } = await api.post("/math").send(mathBody);
    expect(status).toBe(200);
    expect(body.result).toBe(4);
  });

  
});