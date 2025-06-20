import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import TransactionListContainer from "./TransactionListContainer";
import TransactionErrorFallback from "../boundaries/TransactionErrorFallback";
import { TransactionListSkeleton } from "../skeletons/TransactionSkeleton";

export default function TransactionListWithBoundary() {
  return (
    <ErrorBoundary FallbackComponent={TransactionErrorFallback}>
      <Suspense fallback={<TransactionListSkeleton />}>
        <TransactionListContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
