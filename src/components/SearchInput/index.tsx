import React from "react";
import { Form, Input } from 'antd';
import { useNewsStore } from "../../store/useNewsStore";

const SearchInput: React.FC = () => {
  const { setSearchQuery, searchQuery } = useNewsStore();

  const handleInputChange = (e: { target: { value: string; }; }) => {
    setSearchQuery(e.target.value)
  };

  return (
    <Form.Item
      label="Поиск"
    >
      <Input.Search
        placeholder="Введите заголовок"
        value={searchQuery}
        onChange={handleInputChange}
      />
    </Form.Item>
  );
};

export default SearchInput;