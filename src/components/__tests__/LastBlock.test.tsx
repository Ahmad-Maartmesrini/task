/*
1. render lastblock with initial state
2. mock api call
3. test button
*/
import { render, screen } from "@testing-library/react";
import LastBlock from "../lastBlock/LastBlock";

describe("test lastblock", () => {
  test("render lastblock with initial state", async () => {
    render(<LastBlock />);
    const lastBlockComponent = screen.getByTestId("last-block");
    expect(lastBlockComponent).toBeInTheDocument();
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});
