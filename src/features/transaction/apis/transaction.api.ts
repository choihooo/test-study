import axios from 'axios';
import type { Transaction, TransactionDetail } from '../types/transaction.types';

export const getTransactions = async (): Promise<Transaction[]> => {
  const res = await axios.get('/api/transactions');
  return res.data;
};

export const getTransactionDetail = async (id: string): Promise<TransactionDetail> => {
  const res = await axios.get(`/api/transactions/${id}`);
  return res.data;
};