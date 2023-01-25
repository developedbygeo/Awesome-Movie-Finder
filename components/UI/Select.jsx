import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { filterClassNames } from '@/utils/components';

const Select = ({ selectOptions, value, setValue }) => (
  <Listbox value={value} onChange={setValue}>
    {({ open }) => (
      <>
        <Listbox.Label className="sr-only">Change platform</Listbox.Label>
        <div className="relative w-52">
          <div className="divide-indigo-600 shadow-sm inline-flex divide-x rounded-md">
            <div className="divide-indigo-600 shadow-sm inline-flex divide-x rounded-md">
              <div className="bg-indigo-500 shadow-sm inline-flex items-center rounded-l-md border border-transparent py-2 pl-3 pr-4 text-white">
                <CheckIcon
                  className="h-5 w-5 text-gray-900 dark:text-white"
                  aria-hidden="true"
                />
                <p className="ml-2.5 font-medium text-gray-900 text-sm dark:text-gray-300">
                  {value.label}
                </p>
              </div>
              <Listbox.Button className="bg-indigo-500 hover:bg-indigo-600 inline-flex items-center rounded-l-none rounded-r-md border-l-secondary/50 p-2 font-medium text-white text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-50 dark:border-l-secondary/50">
                <span className="sr-only">Change published status</span>
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-900 dark:text-white"
                  aria-hidden="true"
                />
              </Listbox.Button>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="shadow-lg ring-black absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white ring-1 ring-opacity-5 focus:outline-none">
              {selectOptions.map((option) => (
                <Listbox.Option
                  key={option.label}
                  className={({ active }) =>
                    filterClassNames(
                      active ? 'bg-black-100 dark:bg-dark' : 'text-gray-900',
                      'cursor-default select-none p-4 text-sm'
                    )
                  }
                  value={option}
                >
                  {({ selection, active }) => (
                    <div className="flex flex-col">
                      <div className="flex items-center justify-start gap-2">
                        {option.icon ? (
                          <div className="text-blue-500">{option.icon}</div>
                        ) : null}
                        <p
                          className={
                            selection ? 'font-semibold' : 'font-normal'
                          }
                        >
                          {option.label}
                        </p>
                        {selection ? (
                          <span
                            className={
                              active ? 'text-white' : 'text-indigo-500'
                            }
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </div>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </>
    )}
  </Listbox>
);

export default Select;
