import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { EyeIcon } from 'src/view/components/icons/EyeIcon';
import { formatCurrency } from 'src/app/utils/formatCurrency';

import { AccountCard } from './AccountCard';
import { AccountsSliderNavigation } from './AccountsSliderNavigation';
import { useAccountsController } from './useAccountsController';

export function Accounts() {
  const { sliderState, setSliderState, windowWidth } = useAccountsController();

  const slidesPerViewValue =
    windowWidth >= 1024 || windowWidth < 768 && windowWidth >= 425
      ? 2.15
      : 1.25;

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="tracking-[-0.5px] text-white">
          Saldo total
        </span>
        <div className="flex items-center gap-2">
          <strong className="text-[32px] leading-8 tracking-[-1px] text-white">
            {formatCurrency(1000.23)}
          </strong>
          <button className="h-8 w-8 flex items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={slidesPerViewValue}
            onSlideChange={({ isBeginning, isEnd }) => {
              setSliderState({
                isBeginning,
                isEnd
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
              <AccountsSliderNavigation
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
    </div>
  );
}
