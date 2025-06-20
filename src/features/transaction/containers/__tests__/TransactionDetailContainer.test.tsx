import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TransactionDetailContainer from '../TransactionDetailContainer';
import * as useTransactionDetailModule from '../../hooks/useTransactionDetails';
import type { TransactionDetail } from '../../types/transaction.types';

const queryClient = new QueryClient();

jest.mock('../../hooks/useTransactionDetails');

describe('TransactionDetailContainer', () => {
  const renderWithProvider = (id = '1', onRepeat = jest.fn()) =>
    render(
      <QueryClientProvider client={queryClient}>
        <TransactionDetailContainer id={id} onRepeat={onRepeat} />
      </QueryClientProvider>
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders nothing when no data', () => {
    (useTransactionDetailModule.useTransactionDetail as jest.Mock).mockReturnValue({ data: undefined });
    const { container } = renderWithProvider();
    expect(container).toBeEmptyDOMElement();
  });

  it('renders detail when data is present', () => {
    const detail: TransactionDetail = {
      id: '1',
      recipient: '홍길동',
      amount: 10000,
      date: '2024-06-10',
      memo: '점심',
      accountNumber: '110-123-456789',
    };
    (useTransactionDetailModule.useTransactionDetail as jest.Mock).mockReturnValue({ data: detail });
    renderWithProvider('1');
    expect(screen.getByText('홍길동')).toBeInTheDocument();
    expect(screen.getByText('10,000원')).toBeInTheDocument();
    expect(screen.getByText('날짜: 2024-06-10')).toBeInTheDocument();
    expect(screen.getByText('메모: 점심')).toBeInTheDocument();
    expect(screen.getByText('계좌번호: 110-123-456789')).toBeInTheDocument();
  });
}); 