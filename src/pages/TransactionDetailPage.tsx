import TransactionDetailWithBoundary from '@src/features/transaction/containers/TransactionDetailWithBoundary';
import { useParams, useNavigate } from 'react-router-dom';


export default function TransactionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) throw new Error('ID 없음');

  return (
    <TransactionDetailWithBoundary
      id={id}
      onRepeat={(recipient) => navigate(`/transfer?to=${recipient}`)}
    />
  );
}
