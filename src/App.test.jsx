import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("renders the profile", () => {
  render(<App />);
  expect(screen.getAllByText("Ali Haddi").length).toBeGreaterThan(0);
});
