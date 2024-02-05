export interface BankAccount {
  id: string;
  name: string;
  color: string;
  type: 'INVESTMENT' | 'CHECKING' | 'CASH';
  currentBalance: number;
}
