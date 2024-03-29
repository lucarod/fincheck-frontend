import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from 'src/app/utils/cn';
import { formatCurrency } from 'src/app/utils/formatCurrency';

import { EyeIcon } from '@components/icons/EyeIcon';
import { Spinner } from '@components/Spinner';

import { AccountCard } from './AccountCard';
import { SliderNavigation } from './SliderNavigation';
import { useAccountsController } from './useAccountsController';
import { PlusIcon } from '@radix-ui/react-icons';

export function Accounts() {
  const {
    sliderState,
    slidesPerViewValue,
    areValuesVisible,
    isFetching,
    accounts,
    totalBalance,
    setSliderState,
    toggleValuesVisibility,
    openNewAccountModal,
  } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      {isFetching && (
        <div className="flex items-center justify-center h-full">
          <Spinner className="text-teal-950/50 fill-white w-10 h-10" />
        </div>
      )}

      {!isFetching && (
        <>
          <header className="flex flex-col gap-2">
            <span className="tracking-[-0.5px] text-white">
              Saldo total
            </span>
            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  'text-[32px] leading-8 tracking-[-1px] text-white',
                  !areValuesVisible && 'blur-md'
                )}
              >
                {formatCurrency(totalBalance)}
              </strong>
              <button
                onClick={toggleValuesVisibility}
                className="h-8 w-8 flex items-center justify-center"
              >
                <EyeIcon open={areValuesVisible} />
              </button>
            </div>
          </header>

          <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
            {!accounts.length && (
              <>
                <div className="mb-4" slot="container-start">
                  <strong className="text-white tracking-[-1px] text-lg font-bold">
                    Minhas contas
                  </strong>
                </div>
                <button
                  onClick={openNewAccountModal}
                  className="mt-4 h-52 rounded-2xl border-2 border-dashed border-teal-600
                  flex flex-col items-center justify-center gap-4 text-white"
                >
                  <div
                    className="w-11 h-11 rounded-full border-2 border-dashed
                   border-white flex items-center justify-center"
                  >
                    <PlusIcon className="w-6 h-6" />
                  </div>
                  <span className="tracking-[-0.5px] font-medium block w-28">
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}
            {!!accounts.length && (
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={slidesPerViewValue}
                  onSlideChange={({ isBeginning, isEnd }) => {
                    setSliderState({
                      isBeginning,
                      isEnd,
                    });
                  }}
                >
                  <div
                    className="flex items-center justify-between mb-4"
                    slot="container-start"
                  >
                    <strong className="text-white tracking-[-1px] text-lg font-bold">
                      Minhas contas
                    </strong>
                    <SliderNavigation
                      isBeggining={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
                  </div>

                  {accounts.map((account) => (
                    <SwiperSlide key={account.id}>
                      <AccountCard
                        bankAccount={account}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
