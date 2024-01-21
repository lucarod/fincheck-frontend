import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FilterIcon } from 'src/view/components/icons/FilterIcon';
import { TransactionsIcon } from 'src/view/components/icons/TransactionsIcon';
import { MONTHS } from 'src/app/config/constants';
import { SliderOption } from './SliderOption';
import { SliderNavigation } from './SliderNavigation';

export function Transactions() {
  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full px-4 py-8 lg:p-10">
      <header className="">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 py-3">
            <TransactionsIcon />
            <span className="text-gray-800 text-sm tracking-[-0.5px] font-medium">
              Transações
            </span>
            <ChevronDownIcon className="text-gray-900 w-6 h-6" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center">
            <FilterIcon />
          </button>
        </div>
        <div className="mt-6 relative">
          <Swiper
            spaceBetween={16}
            slidesPerView={3}
            centeredSlides
            slideToClickedSlide
            className="px-12 md:px-16"
          >
            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <SliderOption
                    isActive={isActive}
                    month={month}
                    index={index}
                  />
                )}
              </SwiperSlide>
            ))}
            <SliderNavigation />
          </Swiper>
        </div>
      </header>

      <div className="mt-4">Content</div>
    </div>
  );
}
