import type { TransactionDetail } from "../types/transaction.types";
import { memo } from 'react';

interface Props {
  detail: TransactionDetail;
  onRepeat: () => void;
}

function TransactionDetailView({ detail, onRepeat }: Props) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6 mt-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{detail.recipient}</h2>
      <p className="text-3xl font-bold text-blue-600 mb-2">{detail.amount.toLocaleString()}원</p>
      <p className="text-gray-500 mb-1">날짜: {detail.date}</p>
      <p className="text-gray-500 mb-1">메모: {detail.memo}</p>
      <p className="text-gray-500 mb-4">계좌번호: {detail.accountNumber}</p>
      <button
        onClick={onRepeat}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        이체 다시 하기
      </button>
    </div>
  );
}

export default memo(TransactionDetailView);
