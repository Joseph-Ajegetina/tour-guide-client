// CountrySelect.js
import React, {  useMemo } from 'react'
import Select from 'react-select';
import { Form } from 'react-bootstrap';
import countryList from 'react-select-country-list'

const CountrySelector = ({ value, onChange, options}) => {

  return (
    <Form.Group>
      <Form.Label>Select a country</Form.Label>
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
