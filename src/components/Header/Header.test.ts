import Header from "./Header";

describe("Given a Header", () => {
  describe("when it's rendered", () => {
    test("Then it should appear 'Pokemon'on the screen", () => {
      const screen = document.createElement("div");
      const headerText = "Pokemon";

      const header = new Header(screen, headerText);
      header.render();

      const query = header.domElement.querySelector("h1");

      expect(query).not.toBeNull();
      expect(query.textContent).toBe(headerText);
    });
  });
});
