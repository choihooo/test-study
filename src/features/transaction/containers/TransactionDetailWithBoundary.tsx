import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import TransactionDetailContainer from "./TransactionDetailContainer";
import TransactionErrorFallback from "../boundaries/TransactionErrorFallback";
import { TransactionDetailSkeleton } from "../skeletons/TransactionSkeleton";

interface Props {
  id: string;
  onRepeat: (recipient: string) => void;
}

export default function TransactionDetailWithBoundary({ id, onRepeat }: Props) {
  return (
    <ErrorBoundary FallbackComponent={TransactionErrorFallback}>
      <Suspense fallback={<TransactionDetailSkeleton />}>
        <TransactionDetailContainer id={id} onRepeat={onRepeat} />
      </Suspense>
    </ErrorBoundary>
  );
}
