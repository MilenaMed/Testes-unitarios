import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "protocols-generator";
import { v4 as uuidv4 } from 'uuid'

jest.mock("uuid", () => ({ v4: () => 'ID DO PROTOCOLO' }))



describe("calculator tests", () => {
    it("should generate protocol", async () => {
        const prot = await generateProtocolForPacient(faker.person.firstName(), faker.person.lastName(), true);
        expect(prot).toEqual({
            priority: expect.any(Boolean),
            date: expect.any(Date),
            pacient: expect.any(String),
            protocol: uuidv4(),
        })
    })
});