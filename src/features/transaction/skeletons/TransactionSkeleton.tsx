// 거래 리스트용 스켈레톤
export function TransactionListSkeleton() {
  return (
    <div className="p-4 grid gap-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="animate-pulse flex flex-col gap-2 bg-white rounded-lg shadow p-4 border border-gray-100">
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
          <div className="h-6 w-1/2 bg-gray-300 rounded" />
          <div className="h-3 w-1/4 bg-gray-100 rounded" />
        </div>
      ))}
    </div>
  );
}

// 거래 상세용 스켈레톤
export function TransactionDetailSkeleton() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6 mt-8 border border-gray-100 animate-pulse">
      <div className="h-6 w-1/2 bg-gray-200 rounded mb-4" />
      <div className="h-8 w-1/3 bg-gray-300 rounded mb-4" />
      <div className="h-4 w-1/4 bg-gray-100 rounded mb-2" />
      <div className="h-4 w-1/3 bg-gray-100 rounded mb-2" />
      <div className="h-4 w-2/3 bg-gray-100 rounded mb-6" />
      <div className="h-10 w-32 bg-gray-200 rounded" />
    </div>
  );
}
