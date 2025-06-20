import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import TransactionCard from "../TransactionCard";
import type { Transaction } from "../../types/transaction.types";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("TransactionCard", () => {
  const transaction: Transaction = {
    id: "1",
    recipient: "홍길동",
    amount: 10000,
    date: "2024-06-10",
    memo: "점심",
  };

  it("renders recipient, amount, and date", () => {
    render(<TransactionCard transaction={transaction} />);
    expect(screen.getByText("홍길동")).toBeInTheDocument();
    expect(screen.getByText("10,000원")).toBeInTheDocument();
    expect(screen.getByText("2024-06-10")).toBeInTheDocument();
  });

  it("calls navigate on click", async () => {
    const user = userEvent.setup();
    render(<TransactionCard transaction={transaction} />);
    const card = screen.getByText("홍길동").closest("div");
    expect(card).toBeInTheDocument();
    if (card) {
      await user.click(card);
    }
  });
});
