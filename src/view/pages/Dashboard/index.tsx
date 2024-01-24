import { UserMenu } from 'src/view/components/UserMenu';
import { Logo } from 'src/view/components/icons/Logo';

import { Accounts } from './components/Accounts';
import { Transactions } from './components/Transactions';
import { DashboardProvider } from './components/DashboardContext';
import { Fab } from './components/Fab';
import { NewAccountModal } from './modals/NewAccountModal';

export function Dashboard() {
  return (
    <DashboardProvider>
      <div className="min-h-full md:min-h-0 md:h-full w-full flex flex-col gap-4 p-4 md:px-8 md:pb-8 md:pt-6">
        <header className="h-12 flex items-center justify-between">
          <Logo className="h-6 text-teal-900" />
          <UserMenu />
        </header>
        <main className="flex-1 flex gap-4 flex-col md:flex-row max-h-full md:overflow-hidden">
          <section className="w-full md:w-1/2">
            <Accounts />
          </section>
          <section className="w-full md:w-1/2">
            <Transactions />
          </section>
        </main>
        <Fab />
      </div>

      <NewAccountModal />
    </DashboardProvider>
  );
}
