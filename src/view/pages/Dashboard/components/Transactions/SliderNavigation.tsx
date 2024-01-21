import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

export function SliderNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-gray-100 z-10 absolute left-0 top-1/2 -translate-y-1/2
        w-12 h-12 flex items-center justify-center"
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-gray-100 z-10 absolute right-0 top-1/2 -translate-y-1/2
        w-12 h-12 flex items-center justify-center"
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-800" />
      </button>
    </>
  );
}
