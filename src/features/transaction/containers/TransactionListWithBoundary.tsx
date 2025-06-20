import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import TransactionListContainer from './TransactionListContainer';
import TransactionErrorFallback from '../boundaries/TransactionErrorFallback';
import TransactionSkeleton from '../skeletons/TransactionSkeleton';

export default function TransactionListWithBoundary() {
  return (
    <ErrorBoundary FallbackComponent={TransactionErrorFallback}>
      <Suspense fallback={<TransactionSkeleton />}>
        <TransactionListContainer />
      </Suspense>
    </ErrorBoundary>
  );
}