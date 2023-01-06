import { RiFilmFill, RiTvFill } from 'react-icons/ri';

// TODO fix details and icon size

const ItemDetails = ({ title, date, platform, hasNoPlatform, className }) => {
  const icon = platform === 'tv' ? <RiTvFill /> : <RiFilmFill />;

  return (
    <div
      className={`pointer-events-none w-full h-1/3 py-[5%] px-[6%] flex justify-around items-start flex-col ${className} ${
        hasNoPlatform ? 'flex-row-reverse justify-evenly items-center' : ''
      }
        `}
    >
      <div
        className={`${
          hasNoPlatform ? 'h-auto w-auto' : ''
        } flex justify-start items-center`}
      >
        <p className="flex justify-start items-center gap-4">
          <span className="text-lg text-white font-light">
            {date || 'No date'}
          </span>
          {platform && (
            <span className=" text-lg text-white font-light">&bull;</span>
          )}
          {platform && (
            <span
              className={`icon ${
                platform === 'tv' ? 'uppercase' : 'capitalize'
              } flex justify-center align-center gap-4`}
            >
              {icon} {platform}
            </span>
          )}
        </p>
      </div>
      <div className={`${hasNoPlatform ? 'h-auto w-auto' : ''}`}>
        <h2 className="text-xl whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ItemDetails;
