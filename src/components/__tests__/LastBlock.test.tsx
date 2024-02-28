import React from "react";
import { render, screen } from "@testing-library/react";
import LastBlock from "../lastBlock/LastBlock";

describe("LastBlock component", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("displays the loading state initially", async () => {
    render(<LastBlock />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  test("renders the refresh button", () => {
    render(<LastBlock />);
    const refreshButton = screen.getByRole("button", { name: /refresh/i });
    expect(refreshButton).toBeInTheDocument();
  });
});
