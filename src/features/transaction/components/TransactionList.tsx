import TransactionCard from './TransactionCard';
import type { Transaction } from '../types/transaction.types';

interface Props {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: Props) {
  if (transactions.length === 0)
    return (
      <div className="flex items-center justify-center h-40 text-gray-400 text-lg">
        내역이 없습니다
      </div>
    );

  return (
    <div className="grid gap-4 p-4">
      {transactions.map((tx) => (
        <TransactionCard key={tx.id} transaction={tx} />
      ))}
    </div>
  );
}
