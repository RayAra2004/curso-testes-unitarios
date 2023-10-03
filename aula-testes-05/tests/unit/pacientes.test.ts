import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "protocols-generator";

jest.mock("uuid", () => {
  return{
    v4: () => {return "valor do mock"}
  }
});

describe("pacientes tests - unit", () => {
  it("should return one pacient", async () => {

    const pacient = generateProtocolForPacient(faker.person.firstName(), faker.person.lastName(), faker.datatype.boolean());
    expect(pacient).toEqual({
        priority: expect.any(Boolean),
        date: expect.any(Date),
        pacient: expect.any(String),
        protocol: expect.any(String),
      })
  });
});