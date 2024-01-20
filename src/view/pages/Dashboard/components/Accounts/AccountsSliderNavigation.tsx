import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

interface AccountsSliderNavigationProps {
  isBeggining: boolean;
  isEnd: boolean;
}

export function AccountsSliderNavigation({ isBeggining, isEnd }: AccountsSliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div className="flex">
      <button
        className="p-3 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
        onClick={() => swiper.slidePrev()}
        disabled={isBeggining}
      >
        <ChevronLeftIcon className="text-white w-6 h-6"/>
      </button>
      <button
        className="p-3 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <ChevronRightIcon className="text-white w-6 h-6"/>
      </button>
    </div>
  );
}
