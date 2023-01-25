import { motion } from 'framer-motion';
import { getTrending } from '@/utils/api';

import SliderList from '@/components/Content/SliderList';
import List from '@/components/Content/List';

import mockTrending from '@/mock/trending-data.json';
import { getTrendingSlice } from '@/utils/data';
import { trendingOptions } from '@/utils/sliderOptions';
import { pageFadeIn, itemFadeIn } from '@/utils/animations';

const Home = ({ trending, restTrending }) => (
  <motion.section
    initial="hidden"
    animate="visible"
    variants={pageFadeIn}
    className="mt-8 !ml-auto flex h-auto w-full flex-col gap-12 lg:w-[85%]"
  >
    <motion.div variants={itemFadeIn}>
      <SliderList
        className="col-span-12 h-full w-full gap-8"
        trendingData={trending}
        sliderOptions={trendingOptions}
        useWide
      />
    </motion.div>
    <motion.div variants={itemFadeIn}>
      <List
        content={restTrending}
        title="Recommended"
        listClass="grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        className="flex flex-col gap-8"
      />
    </motion.div>
  </motion.section>
);

export const getStaticProps = async () => {
  // const trending = await getTrendingMovies();

  const initialData = mockTrending;
  const topTenTrending = getTrendingSlice(initialData.results, 0, 10);
  const restTrending = getTrendingSlice(initialData.results, 10);

  return {
    props: {
      trending: topTenTrending,
      restTrending,
    },
  };
};

Home.searchGeneric = true;

export default Home;
