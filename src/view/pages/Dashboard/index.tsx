import { UserMenu } from 'src/view/components/UserMenu';
import { Logo } from 'src/view/components/icons/Logo';
import { Accounts } from './components/Accounts';
import { Transactions } from './components/Transactions';

export function Dashboard() {
  return (
    <div className="h-full w-full flex flex-col gap-4 p-4 lg:px-8 lg:pb-8 lg:pt-6">
      <header className="h-12 flex items-center justify-between">
        <Logo className="h-6 text-teal-900" />
        <UserMenu />
      </header>
      <main className="flex-1 flex gap-4 flex-col lg:flex-row">
        <section className="w-full lg:w-1/2">
          <Accounts />
        </section>
        <section className="w-full lg:w-1/2">
          <Transactions />
        </section>
      </main>
    </div>
  );
}
