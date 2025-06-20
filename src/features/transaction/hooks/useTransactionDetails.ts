import { useSuspenseQuery } from '@tanstack/react-query';
import { getTransactionDetail } from '../apis/transaction.api';

export const useTransactionDetail = (id: string) => {
  return useSuspenseQuery({
    queryKey: ['transaction', id],
    queryFn: () => getTransactionDetail(id),
  });
};