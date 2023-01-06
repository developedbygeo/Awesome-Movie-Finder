import { useState, useEffect } from 'react';

import useSlider from '@/hooks/useSlider';
import SliderItem from './SliderItem';

const SliderList = ({ trendingData, className, ...props }) => {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState(null);
  const { ref, slider, currentSlide } = useSlider(options);

  useEffect(() => {
    if (trendingData) {
      setData(trendingData);
      setOptions({
        loop: true,
        mode: 'free-snap',
        centered: true,
        slides: {
          perView: 2,
        },
        breakpoints: {
          '(min-width: 768px)': {
            slides: {
              perView: 4,
              spacing: 10,
            },
          },
          '(min-width: 1150px)': {
            slides: {
              perView: 7,
              spacing: 20,
            },
          },
          '(min-width: 319px) and (orientation: landscape) and (max-height: 450px)':
            {
              slides: {
                perView: 4,
                spacing: 10,
              },
            },
        },
        slideChanged(slide) {
          // eslint-disable-next-line no-undef
          setCurrentSlide(slide.details().relativeSlide);
        },
      });
    }
  }, [trendingData, slider]);

  return (
    <article
      className={`flex justify-around align-start flex-col ${className}`}
      {...props}
    >
      <h1>Trending</h1>
      <div className="w-full self-center flex justify-center align-center flex-col gap-12 overflow-hidden">
        <ul
          className="w-full overflow-hidden keen-slider flex"
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
