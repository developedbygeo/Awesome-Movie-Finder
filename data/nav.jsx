import { v4 as uuidv4 } from 'uuid';
import { RiLayoutGridFill, RiFilmFill, RiTvFill, RiBookmarkFill } from 'react-icons/ri';

const navList = [
  {
    id: uuidv4(),
    name: 'Home',
    path: '/',
    icon: <RiLayoutGridFill />,
  },
  {
    id: uuidv4(),
    name: 'Movies',
    path: '/movies',
    icon: <RiFilmFill />,
  },
  {
    id: uuidv4(),
    name: 'TV Shows',
    path: '/tv-shows',
    icon: <RiTvFill />,
  },
  {
    id: uuidv4(),
    name: 'Bookmarks',
    path: '/bookmarks',
    icon: <RiBookmarkFill />,
  },
];

export default navList;
