import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TransactionList from '../TransactionList';
import type { Transaction } from '../../types/transaction.types';

describe('TransactionList', () => {
  it('renders empty state when no transactions', () => {
    render(
      <MemoryRouter>
        <TransactionList transactions={[]} />
      </MemoryRouter>
    );
    expect(screen.getByText('내역이 없습니다')).toBeInTheDocument();
  });

  it('renders a list of transactions', () => {
    const transactions: Transaction[] = [
      {
        id: '1',
        recipient: '홍길동',
        amount: 10000,
        date: '2024-06-10',
        memo: '점심',
      },
      {
        id: '2',
        recipient: '김철수',
        amount: 20000,
        date: '2024-06-11',
        memo: '저녁',
      },
    ];
    render(
      <MemoryRouter>
        <TransactionList transactions={transactions} />
      </MemoryRouter>
    );
    expect(screen.getByText('홍길동')).toBeInTheDocument();
    expect(screen.getByText('김철수')).toBeInTheDocument();
    expect(screen.getAllByText(/원/)).toHaveLength(2);
  });
});
