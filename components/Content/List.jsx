import useWindow from '@/hooks/useWindow';

import ContentItem from '@/components/Content/ContentItem';

const List = ({ content, title, ext, isSearch, listClass, className }) => {
  const [width] = useWindow();

  const isMobile = width < 1024;
  const platformAssist = ext === '/tv-series' ? 'tv' : 'movies';

  return (
    <article className={className}>
      <h2 className={`${isMobile ? 'container' : ''}`}>{title}</h2>
      <ul className={`grid w-full gap-4 lg:gap-8 ${listClass}`}>
        {content.map((item) => (
          <ContentItem
            className=""
            content={item}
            key={item.id}
            platformAssist={platformAssist}
            ext={ext}
          />
        ))}
      </ul>
    </article>
  );
};

export default List;
