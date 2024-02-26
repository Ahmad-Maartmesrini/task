import { render, screen } from "@testing-library/react";
import Balance from "../components/balance/Balance";

describe("Renders Balance", () => {
  test("renders balance correctly", async () => {
    render(<Balance />);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});
