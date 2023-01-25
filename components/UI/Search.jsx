/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import Select from '@/UI/Select';
import { BiSearchAlt } from 'react-icons/bi';
import { selectOptions, platformLookup } from '@/data/search';

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
    clearErrors,
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
    // router.push(`/search?title=${searchQuery}&platform=${selectValue.value}`);
    console.log(searchQuery, selectValue.value);

  const selectGenreHandler = () =>
    setSelectValue((prevState) =>
      prevState === selectOptions[0] ? selectOptions[1] : selectOptions[0]
    );

  const handleBlur = () => clearErrors('searchQuery');

  return (
    <div className="flex h-auto w-full items-center justify-center py-5 pt-12">
      <form
        className="flex items-center gap-4 border-none"
        onSubmit={handleSubmit(formSubmitHandler)}
        onBlur={handleBlur}
      >
        <button
          type="submit"
          title="Search now"
          aria-label="Search now"
          className="btn highlight-focus h-fit rounded-full p-2 text-black-800 dark:text-white"
        >
          <BiSearchAlt className="text-lg" />
        </button>
        <div
          className={`shadow-sm dark:focus-within:border-indigo-600 dark:focus-within:ring-indigo-600 relative min-w-[20rem] rounded-md border border-secondary/50 px-4 py-4 focus-within:ring-1 focus:outline-none ${
            errors.searchQuery &&
            'focus-within:border-accent focus-within:ring-accent'
          }`}
        >
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block bg-light px-1 font-medium text-gray-900 text-xs dark:bg-black-800 dark:text-gray-300"
          >
            Quick search
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 bg-transparent p-0 px-2 text-black-800 placeholder-gray-500 outline-none dark:text-white"
            {...register('searchQuery', { required: true, minLength: 3 })}
            placeholder={
              errors.searchQuery ? 'Field required' : inputPlaceholder
            }
          />
        </div>
        {shouldShowCategories && (
          <div className="my-auto h-fit">
            <Select
              selectOptions={selectOptions}
              value={selectValue}
              setValue={setSelectValue}
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default Search;
