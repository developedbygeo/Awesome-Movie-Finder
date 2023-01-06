import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Select from 'react-select';
import { BiSearchAlt } from 'react-icons/bi';

import { selectOptions, platformLookup } from '@/data/search';
import customSelectStyle from '@/styles/select-styles';

const Search = ({
  shouldShowCategories,
  defaultPlatform,
  defaultPlaceholder,
}) => {
  const router = useRouter();
  const { route } = router;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const defaultValue = platformLookup[defaultPlatform] || selectOptions[0];
  const [selectValue, setSelectValue] = useState(defaultValue);
  const inputPlaceholder = defaultPlaceholder || selectValue.placeholder;

  useEffect(() => {
    if (defaultPlatform && route) {
      setSelectValue(platformLookup[defaultPlatform]);
    }
  }, [defaultPlatform, route]);

  const formSubmitHandler = ({ searchQuery }) =>
    router.push(`/search?title=${searchQuery}&platform=${selectValue.value}`);

  const selectGenreHandler = () =>
    setSelectValue((prevState) =>
      prevState === selectOptions[0] ? selectOptions[1] : selectOptions[0]
    );

  return (
    <div className="h-auto py-5 w-full flex justify-start items-center gap-4">
      <form
        className="w-full border-none flex justify-center items-center gap-4"
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        <button
          type="submit"
          title="Search now"
          aria-label="Search now"
          className="btn highlight-focus h-20 ww-20 p-4 text-white"
        >
          <BiSearchAlt />
        </button>
        <input
          {...register('searchQuery', { required: true, minLength: 3 })}
          placeholder={errors.searchQuery ? 'Field required' : inputPlaceholder}
          type="text"
          className={`bg-transparent border-none rounded-lg py-3 px-6 text-white/80 highlight-focus ${
            errors.searchQuery && 'shadow-error'
          }`}
        />
        {shouldShowCategories && (
          <Select
            onChange={selectGenreHandler}
            styles={customSelectStyle}
            value={selectValue}
            options={selectOptions}
            isSearchable={false}
            id="awesome-select"
            instanceId="awesome-select"
          />
        )}
      </form>
    </div>
  );
};

export default Search;
