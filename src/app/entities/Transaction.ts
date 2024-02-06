export interface Transaction {
  id: string;
  userId: string;
  bankAccountId: string;
  name: string;
  icon: string;
  type: 'INCOME' | 'EXPENSE';
}
