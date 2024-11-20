import React from "react";
import { Form, Checkbox } from 'antd';
import { CHECKBOX_OPTIONS, TABLE_COLUMNS } from '../../constants';
import { useNewsStore } from "../../store/useNewsStore";

const ColumnsSettings: React.FC = () => {
  const { setVisibleColumns } = useNewsStore();

  const handleChange = (columns: string[]) => {
    setVisibleColumns(columns)
  };

  return (
    <Form.Item
      label="Колонки"
    >
      <Checkbox.Group
        options={CHECKBOX_OPTIONS}
        defaultValue={TABLE_COLUMNS}
        onChange={handleChange}
      />
    </Form.Item>
  );
};

export default ColumnsSettings;