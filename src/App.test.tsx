import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Give component app", () => {
  describe("When instantiate with header 'Star Wars Test'", () => {
    test("Then should show this header title", () => {
      const expectHeader = "Star Wars Test";

      render(<App />);
      const header = screen.getByText(expectHeader);

      expect(header).toBeInTheDocument();
    });
  });
});
