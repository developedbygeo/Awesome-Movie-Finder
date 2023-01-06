import Image from 'next/image';
import NavLink from '@/UI/NavLink';

import ItemDetails from '@/components/Content/ItemDetails';
import { getParsedMovie, getAmbiguousProperty } from '@/utils/data';

const SliderItem = ({
  content,
  priority,
  platformAssist,
  ext,
  className,
  ...props
}) => {
  const {
    poster_path,
    genre_ids,
    media_type,
    first_air_date,
    release_date,
    name,
    original_name,
    original_title,
  } = content;

  const date = getAmbiguousProperty(first_air_date, release_date);
  const year = date ? date.split('-')[0] : '';
  const title = getAmbiguousProperty(name, original_name, original_title);

  const parsedData = getParsedMovie(
    poster_path,
    genre_ids[0],
    media_type,
    date,
    title
  );

  // dedicated to landing page due to ext being unavailable
  const customLandingExt =
    parsedData.platform === 'TV' ? '/tv-series' : '/movies';

  // if not landing, ext is passed through props
  const urlExtension = ext || customLandingExt;

  return (
    <li
      className={`relative cursor-pointer overflow-hidden ${className}`}
      {...props}
    >
      <NavLink href={`${urlExtension}/${content.id}`} title={`${title}`}>
        <div className="relative w-full h-full">
          <Image
            priority={priority}
            placeholder="blur"
            blurDataURL={parsedData.image || '/content/poster-404.webp'}
            src={parsedData.image || '/content/poster-404.webp'}
            alt={title}
            title={title}
            draggable="false"
            className="rounded-3xl"
            width={500}
            height={500}
            sizes="(max-width: 414px) 100vw, (max-width: 768px) 50vw,
            (max-width: 1200px) 100vw,
            100px"
          />
        </div>
      </NavLink>
      <article>
        <ItemDetails
          className="absolute bottom-[100%] left-0 w-full h-[40%] bg-black-900/75 transition-all hover:bottom-0"
          title={title}
          date={year || date || ''}
          platform={parsedData.platform || platformAssist}
        />
      </article>
    </li>
  );
};

export default SliderItem;
