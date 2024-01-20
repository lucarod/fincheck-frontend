import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

export function AccountsSliderNavigation() {
  const swiper = useSwiper();

  return (
    <div className="flex">
      <button className="p-3 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40">
        <ChevronLeftIcon
          className="text-white w-6 h-6"
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button className="p-3 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40">
        <ChevronRightIcon
          className="text-white w-6 h-6"
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
}
