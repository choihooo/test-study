import { useTransactions } from '../hooks/useTransactions';
import TransactionList from '../components/TransactionList';

export default function TransactionListContainer() {
  const { data } = useTransactions();

  return <TransactionList transactions={data ?? []} />;
}
