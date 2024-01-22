import 'swiper/css';

import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MONTHS } from 'src/app/config/constants';
import { cn } from 'src/app/utils/cn';
import { formatCurrency } from 'src/app/utils/formatCurrency';
import emptyState from 'src/assets/empty-state.svg';

import { Spinner } from 'src/view/components/Spinner';
import { FilterIcon } from 'src/view/components/icons/FilterIcon';
import { TransactionsIcon } from 'src/view/components/icons/TransactionsIcon';
import { CategoryIcon } from 'src/view/components/icons/categories/CategoryIcon';

import { SliderOption } from './SliderOption';
import { SliderNavigation } from './SliderNavigation';
import { useTransactionsController } from './useTransactionsController';

export function Transactions() {
  const {
    areValuesVisible,
    isInitialLoading,
    isLoading,
    transactions,
  } = useTransactionsController();

  const hasTransactions = !!transactions.length;

  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full px-4 pt-6 pb-32 md:py-8 lg:p-10 flex flex-col">
      {isInitialLoading && (
        <div className="flex items-center justify-center h-full">
          <Spinner className="w-10 h-10" />
        </div>
      )}
      {!isInitialLoading && (
        <>
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

          <div className="mt-4 space-y-2 flex-1 overflow-y-auto max-h-96 md:max-h-none">
            {isLoading && (
              <div className="flex flex-col h-full items-center justify-center">
                <Spinner className="w-10 h-10 -mt-16" />
              </div>
            )}

            {(!hasTransactions && !isLoading) && (
              <div className="flex flex-col h-full items-center justify-center">
                <img src={emptyState} alt="Empty State" />
                <p className="text-gray-700">
                  Não encontramos nenhuma transação!
                </p>
              </div>
            )}

            {(hasTransactions && !isLoading) && (
              <>
                <div className="p-4 rounded-2xl bg-white flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <CategoryIcon type="expense" category="food" />
                    <div className="flex flex-col">
                      <b className="font-bold tracking-[-0.5px] text-gray-800">
                    Almoço
                      </b>
                      <small className="font-sm text-gray-600">
                    04/06/2023
                      </small>
                    </div>
                  </div>
                  <span
                    className={cn(
                      'text-red-800 tracking-[-0.5px] font-medium',
                      !areValuesVisible && 'blur-sm'
                    )}>
                    {formatCurrency(100)}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <CategoryIcon type="expense" category="food" />
                    <div className="flex flex-col">
                      <b className="font-bold tracking-[-0.5px] text-gray-800">
                    Almoço
                      </b>
                      <small className="font-sm text-gray-600">
                    04/06/2023
                      </small>
                    </div>
                  </div>
                  <span
                    className={cn(
                      'text-red-800 tracking-[-0.5px] font-medium',
                      !areValuesVisible && 'blur-sm'
                    )}>
                    {formatCurrency(100)}
                  </span>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
