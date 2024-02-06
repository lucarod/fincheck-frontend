import { Transaction } from 'src/app/entities/Transaction';

export type TransactionsFilters = {
  month: number;
  year: number;
  bankAccountId?: string;
  type?: Transaction['type'];
}
