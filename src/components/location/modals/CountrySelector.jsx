// CountrySelect.js
import React, {  useMemo } from 'react'
import Select from 'react-select';
import { Form } from 'react-bootstrap';
import countryList from 'react-select-country-list'

const CountrySelector = ({ value, onChange, inputOptions}) => {
  const options =  useMemo(() => inputOptions ? inputOptions: countryList().getData(), [inputOptions])
  return (
    <Form.Group>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        placeholder="Select a country"
        isSearchable
        className="basic-single"
        classNamePrefix="select"
      />
    </Form.Group>
  );
};

export default CountrySelector;
