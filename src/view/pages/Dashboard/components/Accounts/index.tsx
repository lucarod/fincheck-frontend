import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from 'src/app/utils/cn';
import { formatCurrency } from 'src/app/utils/formatCurrency';

import { EyeIcon } from 'src/view/components/icons/EyeIcon';
import { Spinner } from 'src/view/components/Spinner';

import { AccountCard } from './AccountCard';
import { SliderNavigation } from './SliderNavigation';
import { useAccountsController } from './useAccountsController';

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    slidesPerViewValue,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
  } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      {isLoading && (
        <div className="flex items-center justify-center h-full">
          <Spinner className="text-teal-950/50 fill-white w-10 h-10" />
        </div>
      )}
      {!isLoading && (
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
                {formatCurrency(1000.23)}
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
                <SwiperSlide>
                  <AccountCard
                    type="CHECKING"
                    color="#7950F2"
                    name="Nubank"
                    balance={1000.23}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <AccountCard
                    type="INVESTMENT"
                    color="#333"
                    name="XP Investimentos"
                    balance={300.57}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <AccountCard
                    type="CASH"
                    color="#0F0"
                    name="Carteira"
                    balance={122.4}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
