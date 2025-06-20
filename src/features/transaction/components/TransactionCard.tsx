import type { Transaction } from '../types/transaction.types';
import { useNavigate } from 'react-router-dom';

interface Props {
  transaction: Transaction;
}

export default function TransactionCard({ transaction }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/transactions/${transaction.id}`)}
      className="bg-white rounded-lg shadow p-4 cursor-pointer hover:bg-blue-50 transition border border-gray-100"
    >
      <h3 className="text-lg font-semibold text-gray-800">{transaction.recipient}</h3>
      <p className="text-xl font-bold text-blue-600">{transaction.amount.toLocaleString()}원</p>
      <p className="text-sm text-gray-500 mt-1">{transaction.date}</p>
    </div>
  );
}
