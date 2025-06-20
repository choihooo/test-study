// features/transaction/containers/TransactionDetailContainer.tsx
import TransactionDetailView from "../components/TransactionDetailView";
import { useTransactionDetail } from "../hooks/useTransactionDetails"; 

interface Props {
  id: string;
  onRepeat: (recipient: string) => void;
}

export default function TransactionDetailContainer({ id, onRepeat }: Props) {
  const { data } = useTransactionDetail(id);

  if (!data) return null; // fallback 처리된다고 가정

  return (
    <TransactionDetailView
      detail={data}
      onRepeat={() => onRepeat(data.recipient)}
    />
  );
}
