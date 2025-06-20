interface FallbackProps {
    error: Error;
    resetErrorBoundary: () => void;
  }
  
  export default function TransactionErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    return (
      <div role="alert">
        <p>문제가 발생했습니다:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>다시 시도</button>
      </div>
    );
  }