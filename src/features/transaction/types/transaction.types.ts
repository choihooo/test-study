export interface Transaction {
    id: string;
    recipient: string;
    amount: number;
    date: string;
    memo: string;
  }
  
  export interface TransactionDetail extends Transaction {
    accountNumber: string;
  }