import { describe, expect, test } from "vitest";
import { render, screen} from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
  test("renders", () => {
    render(<App />);
    expect(screen.getByText("Football Top Trumps")).toBeDefined();
  });
});