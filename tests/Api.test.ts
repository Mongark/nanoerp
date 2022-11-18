import { Api } from "../src/api/api";
import { Bindings } from "../src/api/client/axios-bindings";

describe("Api class testing", () => {
    const api = new Api();

    it("Bindings.activate() should be callable", () => {
        Bindings.activate("http://localhost:3000/api/rooms/getAll", "GET", {});
    });
});
