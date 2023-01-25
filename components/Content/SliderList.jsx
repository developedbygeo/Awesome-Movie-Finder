import { useState, useEffect } from 'react';

import useWindow from '@/hooks/useWindow';
import useSlider from '@/hooks/useSlider';
import SliderItem from './ContentItem';

const SliderList = ({
  trendingData,
  sliderOptions,
  className,
  useWide = false,
}) => {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState(null);
  const { ref, slider, currentSlide } = useSlider(options);
  const [width] = useWindow();

  const isMobile = width < 1024;

  useEffect(() => {
    if (trendingData) {
      setData(trendingData);
      setOptions(sliderOptions);
    }
  }, [trendingData, sliderOptions, slider]);

  return (
    <article className={`align-start flex flex-col ${className}`}>
      <h2 className={`${isMobile ? 'container' : ''}`}>Trending</h2>
      <div className="align-center flex w-full flex-col justify-center gap-12 self-center overflow-hidden">
        <ul
          className="keen-slider flex w-full overflow-hidden"
          ref={ref}
          role="region"
          alt="Trending gallery"
          aria-label="Trending gallery"
        >
          {data &&
            data.map((item, idx) => {
              const priority = idx < 2;
              return (
                <SliderItem
                  className="keen-slider__slide"
                  key={item.id}
                  content={item}
                  useWide={isMobile ? false : useWide}
                  priority={priority}
                  aria-label={`slide ${idx + 1} of ${data.length}`}
                  tabIndex={0}
                  role="group"
                />
              );
            })}
        </ul>
      </div>
    </article>
  );
};

export default SliderList;
