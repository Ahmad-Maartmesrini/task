import { render, screen, waitFor } from "@testing-library/react";
import Balance from "../balance/Balance";

describe("test balance state changes", () => {
  test("render balance with initial state", async () => {
    render(<Balance />);
    const balanceComponent = screen.getByTestId("balance-test");
    expect(balanceComponent).toBeInTheDocument();
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  test("fetch and display balance correctly", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: () => Promise.resolve({ result: 2 }),
    } as any);

    render(<Balance />);

    await waitFor(() => {
      const balanceElement = screen.getByTestId("$");
      expect(balanceElement).toHaveTextContent("0.000002$");
    });
  });
});
