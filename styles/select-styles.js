/* eslint-disable no-nested-ternary */
// TODO if necessary, can override style with the classname prop:
// see: https://react-select.com/styles#using-classnames

const customSelectStyle = {
  control: (base, state) => ({
    ...base,
    background: 'transparent',
    borderRadius: state.isFocused ? '1rem' : 3,
    borderColor: 'transparent',
    boxShadow: state.isFocused ? null : null,
    '&:hover': {
      borderColor: state.isFocused ? '#5a698f' : null,
      backgroundColor: '#161d2f',
    },
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isDisabled ? '#fafafa' : isSelected ? '#ceddf2' : '#fff',
    color: isDisabled ? '#ccc' : isSelected ? '#000' : '#000',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    ':active': {
      backgroundColor: '#fafafa',
    },
  }),
  placeholder: (styles, dot) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles) => ({ ...styles, color: 'rgba(255, 255, 255, 0.8)' }),
  input: (styles) => ({ ...styles, color: 'rgba(255, 255, 255, 0.8)' }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: 'rgba(255, 255, 255, 0.55)',
    '&:hover': {
      color: '#fc4747',
    },
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
  }),
};

export default customSelectStyle;
