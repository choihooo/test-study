import TransactionCard from './TransactionCard';
import type { Transaction } from '../types/transaction.types';
import { memo, useMemo } from 'react';

interface Props {
  transactions: Transaction[];
}

function TransactionList({ transactions }: Props) {
  const cards = useMemo(() => (
    transactions.map((tx) => (
      <TransactionCard key={tx.id} transaction={tx} />
    ))
  ), [transactions]);

  if (transactions.length === 0)
    return (
      <div className="flex items-center justify-center h-40 text-gray-400 text-lg">
        내역이 없습니다
      </div>
    );

  return (
    <div className="grid gap-4 p-4">
      {cards}
    </div>
  );
}

export default memo(TransactionList);
