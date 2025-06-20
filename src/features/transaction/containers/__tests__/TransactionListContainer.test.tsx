import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import TransactionListContainer from '../TransactionListContainer';
import * as useTransactionsModule from '../../hooks/useTransactions';
import type { Transaction } from '../../types/transaction.types';

const queryClient = new QueryClient();

jest.mock('../../hooks/useTransactions');

describe('TransactionListContainer', () => {
  const renderWithProvider = () =>
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <TransactionListContainer />
        </QueryClientProvider>
      </MemoryRouter>
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders empty state when no transactions', () => {
    (useTransactionsModule.useTransactions as jest.Mock).mockReturnValue({ data: [] });
    renderWithProvider();
    expect(screen.getByText('내역이 없습니다')).toBeInTheDocument();
  });

  it('renders a list of transactions', () => {
    const transactions: Transaction[] = [
      { id: '1', recipient: '홍길동', amount: 10000, date: '2024-06-10', memo: '점심' },
      { id: '2', recipient: '김철수', amount: 20000, date: '2024-06-11', memo: '저녁' },
    ];
    (useTransactionsModule.useTransactions as jest.Mock).mockReturnValue({ data: transactions });
    renderWithProvider();
    expect(screen.getByText('홍길동')).toBeInTheDocument();
    expect(screen.getByText('김철수')).toBeInTheDocument();
  });
}); 