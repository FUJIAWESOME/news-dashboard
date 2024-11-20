import React from "react";
import { Form, Select } from 'antd';
import { SORT_OPTIONS } from '../../constants';
import { useNewsStore } from "../../store/useNewsStore";
import { SortBy } from "../../types";

const SearchInput: React.FC = () => {
  const {
    sortOption,
    setSortOption,
  } = useNewsStore();

  const handleSortChange = (value: SortBy) => {
    setSortOption(value);
  };

  return (
    <Form.Item
      label="Сортировка"
    >
      <Select
        defaultValue={sortOption}
        onChange={handleSortChange}
      >
        {SORT_OPTIONS.map((option) => (
          <Select.Option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SearchInput;