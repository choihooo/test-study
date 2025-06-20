import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TransactionDetailView from '../TransactionDetailView';
import type { TransactionDetail } from '../../types/transaction.types';

describe('TransactionDetailView', () => {
  const detail: TransactionDetail = {
    id: '1',
    recipient: '홍길동',
    amount: 10000,
    date: '2024-06-10',
    memo: '점심',
    accountNumber: '110-123-456789',
  };

  it('renders all detail fields and button', () => {
    render(<TransactionDetailView detail={detail} onRepeat={() => {}} />);
    expect(screen.getByText('홍길동')).toBeInTheDocument();
    expect(screen.getByText('10,000원')).toBeInTheDocument();
    expect(screen.getByText('날짜: 2024-06-10')).toBeInTheDocument();
    expect(screen.getByText('메모: 점심')).toBeInTheDocument();
    expect(screen.getByText('계좌번호: 110-123-456789')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /이체 다시 하기/ })).toBeInTheDocument();
  });

  it('calls onRepeat when button is clicked', async () => {
    const onRepeat = jest.fn();
    const user = userEvent.setup();
    render(<TransactionDetailView detail={detail} onRepeat={onRepeat} />);
    const button = screen.getByRole('button', { name: /이체 다시 하기/ });
    await user.click(button);
    expect(onRepeat).toHaveBeenCalled();
  });
}); 